import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    // { id: '', title: "", author: " ", price: 0, quantity: 0 },
    // { id: '', title: "", author: "", price: 0, quantity: 0 },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, price, author, quantity } = action.payload;
      const exisitingBook = state.books.find((book) => book.id === id);
      if (exisitingBook) {
        exisitingBook.title = title;
        exisitingBook.author = author;
        exisitingBook.price = price;
        exisitingBook.quantity = quantity;
      }
    },
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { deleteBook, addBooks, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
