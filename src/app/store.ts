import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "./../features/authSlice";
import postReducer from "../features/postSlice";
import commentReducer from "../features/commentSlice";

const persistUsersConfig = {
  key: "users",
  storage,
  blacklist: ["user"],
};

const persistedPostsConfig = {
  key: "posts",
  storage,
};

const persistedCommentsConfig = {
  key: "comments",
  storage,
};

const persistedUsersReducer = persistReducer(persistUsersConfig, authReducer);
const persistedPostsReducer = persistReducer(persistedPostsConfig, postReducer);
const persistedCommentsReducer = persistReducer(
  persistedCommentsConfig,
  commentReducer
);

const store = configureStore({
  reducer: {
    auth: persistedUsersReducer,
    posts: persistedPostsReducer,
    comments: persistedCommentsReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
