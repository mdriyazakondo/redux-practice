import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/booksSlice";
import postReducer from "../Fetching/postSlice";

export const store = configureStore({
  reducer: {
    booksR: bookReducer,
    posts: postReducer,
  },
});
