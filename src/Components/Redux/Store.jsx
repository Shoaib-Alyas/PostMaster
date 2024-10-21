import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './PostsSlice';
import usersReducer from './usersSlice';
import { loadState, saveState } from './localStorage';

// Load persisted state from localStorage (for posts)
const persistedState = {
  posts: loadState(), // Load posts from localStorage (if available)
};

// Configure the Redux store with the persisted state for posts
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
  preloadedState: persistedState, // Use persisted state if available
});

// Subscribe to store updates and save the `posts` state to localStorage
store.subscribe(() => {
  saveState(store.getState().posts); // Save posts to localStorage on every state change
});
