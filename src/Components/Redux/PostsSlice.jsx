import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { sub } from "date-fns";

export const initialState = [
    {
      id: 1,
      name: 'Alice Johnson',
      value: 'Pride and Prejudice',
      userId: 1,
      date: sub(new Date(), { minutes: 10 }).toISOString(), // Post added 10 minutes ago
    },
    {
      id: 2,
      name: 'Bob Smith',
      value: 'Sapiens: A Brief History of Humankind',
      userId: 2,
      date: sub(new Date(), { hours: 2 }).toISOString(), // Post added 2 hours ago
    },
    {
      id: 3,
      name: 'Claire Thompson',
      value: 'To Kill a Mockingbird',
      userId: 3,
      date: sub(new Date(), { days: 1 }).toISOString(), // Post added 1 day ago
    },
    {
      id: 4,
      name: 'David Brown',
      value: 'We Are Animals',
      userId: 4,
      date: sub(new Date(), { weeks: 1 }).toISOString(), // Post added 1 week ago
    },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Updated to handle date
    postAdded: {
      reducer(state, action) {
        if (Array.isArray(state)) {
          state.push(action.payload); // This works if state is an array
        } else {
          console.error('State is not an array:', state);
          // If somehow state is not an array, handle it here
          return [action.payload]; // Reset state as an array containing the new post
        }
      },
      prepare(name, value, userId) {
        return {
          payload: {
            id: nanoid(),
            name,
            value,
            userId,
            date: new Date().toISOString(),
          },
        };
      },
    }
}});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
