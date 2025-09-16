import { configureStore } from "@reduxjs/toolkit";
import prodctsReducer from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    productsR: prodctsReducer,
  },
});
