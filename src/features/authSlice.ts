import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialStateType,
  LoginUserType,
  RegisterUserType,
} from "../types/authTypes";

const userStorage = localStorage.getItem("user");
let user;
if (typeof userStorage === "string") {
  user = JSON.parse(userStorage);
}

const initialState: InitialStateType = {
  user: user ? user : null,
  users: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<RegisterUserType>) => {
      state.user = action.payload;
      state.users = [...state.users, action.payload];
    },
    login: (state, action: PayloadAction<LoginUserType>) => {
      const user = state.users.find(
        (user) => user.email === action.payload.email
      );
      if (user) {
        state.user = user;
      }
    },
  },
});

export default authSlice.reducer;
export const { register, login } = authSlice.actions;
