import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addBooks, updateBook } from "../features/booksSlice";

const BookFrom = ({ bookToEdit, onCencel }) => {
  const [books, setBooks] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (bookToEdit) {
      setBooks(bookToEdit);
    }
  }, [bookToEdit]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooks((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookToEdit) {
      dispatch(updateBook(books));
    } else {
      dispatch(addBooks({ id: nanoid(), ...books }));
    }
    setBooks({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto  mt-20 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-3 max-w-3xl px-4 md:px-0"
      >
        <h3 className="text-center text-2xl font-semibold text-gray-700 py-8">
          Book List From
        </h3>
        <input
          type="text"
          name="title"
          id=""
          value={books.title}
          onChange={handleChange}
          placeholder="title"
          className="outline-none w-full border border-gray-400 py-2 pl-4 rounded-md"
          required
        />
        <input
          type="text"
          name="author"
          id=""
          value={books.author}
          onChange={handleChange}
          placeholder="author"
          className="outline-none w-full border border-gray-400 py-2 pl-4 rounded-md"
          required
        />
        <input
          type="number"
          name="price"
          id=""
          value={books.price}
          onChange={handleChange}
          placeholder="price"
          className="outline-none w-full border border-gray-400 py-2 pl-4 rounded-md"
          required
        />
        <input
          type="number"
          name="quantity"
          id=""
          value={books.quantity}
          onChange={handleChange}
          placeholder="quantity"
          className="outline-none w-full border border-gray-400 py-2 pl-4 rounded-md"
          required
        />
        <button
          className="py-1.5 w-full bg-green-500 hover:bg-green-700 text-white cursor-pointer rounded-md"
          type="submit"
        >
          {bookToEdit ? "Update Book" : " Add Book "}
        </button>
        {bookToEdit && (
          <button
            className="py-1.5 bg-red-600 w-full rounded-md hover:bg-red-700 text-white font-medium cursor-pointer"
            onClick={() => {
              onCencel(null);
              setBooks({ title: "", author: "", price: "", quantity: "" });
            }}
          >
            Cencel
          </button>
        )}
      </form>
    </div>
  );
};

export default BookFrom;
