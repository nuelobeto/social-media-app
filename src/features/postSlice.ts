import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { posts } from "../db/posts";
import { InitialStateType, PostType } from "../types/postTypes";

const initialState: InitialStateType = {
  posts: posts,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
export const {} = postSlice.actions;
