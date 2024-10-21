import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { sub } from "date-fns";

export const initialState = [
    {
        id: 1,
        name: 'Alice Johnson',
        value: 'Pride and Prejudice',
        userId: 1,
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: 2,
        name: 'Bob Smith',
        value: 'Sapiens: A Brief History of Humankind',
        userId: 2,
        date: sub(new Date(), { hours: 2 }).toISOString(),
    },
    {
        id: 3,
        name: 'Claire Thompson',
        value: 'To Kill a Mockingbird',
        userId: 3,
        date: sub(new Date(), { days: 1 }).toISOString(),
    },
    {
        id: 4,
        name: 'David Brown',
        value: 'We Are Animals',
        userId: 4,
        date: sub(new Date(), { weeks: 1 }).toISOString(),
    },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
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
        },
        postUpdated(state, action) {
            const { id, name, value, userId } = action.payload;
            const existingPost = state.find((post) => post.id === id);
            if (existingPost) {
                existingPost.name = name;
                existingPost.value = value;
                existingPost.userId = userId;
            }
        },
        postDeleted(state, action) {
            const postId = action.payload;
            return state.filter((post) => post.id !== postId);
        },
    },
});

export const { postAdded, postUpdated, postDeleted } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;
