import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './PostsSlice';
import PostAuthor from './PostAuthor';
import { formatDistanceToNow } from 'date-fns';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts =
  Array.isArray(posts) && posts.length > 0
    ? posts.map((post) => (
        <li
          key={post.id}
          className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold text-gray-800">{post.name}</h2>
          <h4 className="mt-2 text-gray-600">{post.value}</h4>
          <p className="postcredit">
            <PostAuthor userId={post.userId} />
          </p>
          <p className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(post.date))} ago
          </p>
        </li>
      ))
    : <p className="text-center text-gray-500">No posts available</p>;
  return (
    <div className="max-w-2xl p-6 mx-auto rounded-lg shadow-lg bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">Posts</h1>
      <ul className="divide-y divide-gray-300">{renderedPosts}</ul>
    </div>
  );
};

export default PostsList;
