import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './PostsSlice'; // Assuming PostsSlice exists
import { selectAllUsers } from './usersSlice'; // Assuming usersSlice exists

const AddFormPost = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(''); // State for post name
  const [value, setValue] = useState(''); // State for post content
  const [userId, setUserId] = useState(''); // State for selected user

  const users = useSelector(selectAllUsers); // Getting users from redux

  // Debug: Check if users array is populated correctly
  console.log("Users:", users);

  // Input change handlers
  const onNameChange = (e) => setName(e.target.value);
  const onValueChange = (e) => setValue(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSavedPostClicked = () => {
    if (name && value && userId) {
      // Debug: Check if userId is being set correctly
      console.log("Selected userId:", userId);
      console.log("userId type:", typeof userId); // Should be string if it comes from <select>


      // Find the selected user's name from the users list based on userId
    //   const selectedUser = users.find((user) => user.id === userId);
    const selectedUser = users.find((user) => user.id === Number(userId));
      if (!users || users.length === 0) {
        return <p>Loading users...</p>;
      }
      

      // Debug: Ensure selectedUser is found correctly
      console.log("Selected user:", selectedUser);

      // Dispatch the post with the author's name or 'Unknown Author'
      dispatch(postAdded(name, value, selectedUser ? selectedUser.name : 'Unknown Author'));

      setName(''); // Clear form fields after save
      setValue('');
      setUserId('');
    }
  };

  const canSave = Boolean(name) && Boolean(value) && Boolean(userId); // Validation logic

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="max-w-lg p-8 mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900">
          Create a New Post
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-800" htmlFor="postName">
              Post Title:
            </label>
            <input
              type="text"
              id="postName"
              className="w-full p-3 text-gray-900 transition border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter the post title"
              value={name}
              onChange={onNameChange}
            />
          </div>

          <div>
            <label htmlFor="postAuthor" className="block mb-2 font-semibold text-gray-800">
              Author:
            </label>
            <select
              id="postAuthor"
              className="w-full p-3 text-gray-900 transition border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-transparent"
              value={userId}
              onChange={onAuthorChange}
            >
              <option value="">Select an Author</option>
              {userOptions}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-800" htmlFor="postValue">
              Post Content:
            </label>
            <textarea
              id="postValue"
              className="w-full p-3 text-gray-900 transition border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-transparent"
              placeholder="Write your post content here"
              value={value}
              onChange={onValueChange}
            />
          </div>

          <button
            type="button"
            className={`w-full py-3 px-6 text-white font-semibold rounded-lg shadow-lg transition-transform transform-gpu duration-300 hover:scale-105 ${
              canSave
                ? 'bg-purple-600 hover:bg-purple-700 focus:bg-purple-800'
                : 'bg-gray-400 cursor-not-allowed'
            } focus:outline-none focus:ring-4 focus:ring-purple-500`}
            onClick={onSavedPostClicked}
            disabled={!canSave}
          >
            Save Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFormPost;
