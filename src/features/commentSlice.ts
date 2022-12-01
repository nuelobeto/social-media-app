import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { comments } from "../db/comments";
import { InitialStateType } from "../types/commentTypes";

const initialState: InitialStateType = {
  comments: comments,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

export default commentSlice.reducer;
export const {} = commentSlice.actions;
