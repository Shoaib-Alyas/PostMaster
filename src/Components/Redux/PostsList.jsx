import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, postDeleted } from './PostsSlice';
import PostAuthor from './PostAuthor';
import { formatDistanceToNow } from 'date-fns';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();
    const [editPostId, setEditPostId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editValue, setEditValue] = useState('');

    const startEdit = (post) => {
        setEditPostId(post.id);
        setEditName(post.name);
        setEditValue(post.value);
    };

    const renderedPosts = posts.map((post) => (
        <li
            key={post.id}
            className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-md"
        >
            {editPostId === post.id ? (
                <div>
                    <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full p-2 mb-2 text-black border rounded"
                    />
                    <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="w-full p-2 text-black border rounded"
                    />
                    <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
                        Save
                    </button>
                </div>
            ) : (
                <>
                    <h2 className="text-xl font-semibold text-gray-800">{post.name}</h2>
                    <h4 className="mt-2 text-gray-600">{post.value}</h4>
                    <p className="postcredit">
                        <PostAuthor userId={post.userId} />
                    </p>
                    <p className="text-sm text-gray-500">
                        {formatDistanceToNow(new Date(post.date))} ago
                    </p>
                    <div className="flex space-x-2">
                        <button
                            className="px-4 py-2 text-white bg-blue-500 rounded"
                            onClick={() => startEdit(post)}
                        >
                            Edit
                        </button>
                        <button
                            className="px-4 py-2 text-white bg-red-500 rounded"
                            onClick={() => dispatch(postDeleted(post.id))}
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </li>
    ));

    return (
        <div className="max-w-2xl p-6 mx-auto rounded-lg shadow-lg bg-gray-50">
            <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">Posts</h1>
            <ul className="divide-y divide-gray-300">{renderedPosts}</ul>
        </div>
    );
};

export default PostsList;
