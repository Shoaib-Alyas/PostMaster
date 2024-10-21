import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from './usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  // Find the user by ID or return "Unknown author"
//   const author = users.find((user) => user.id === userId);
const author = users.find((user) => user.id === Number(userId));


// return <span>by {author ? author.name : 'Unknown author'}</span>;

};

export default PostAuthor;
