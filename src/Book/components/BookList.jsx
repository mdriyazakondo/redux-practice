import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/booksSlice";

const BookList = ({ onhandleEdit }) => {
  const { books } = useSelector((state) => state.booksR);
  const dispatch = useDispatch();

  const handleDele = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (book) => {
    onhandleEdit(book);
  };

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Book List</h2>
      {books && books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="shadow-md rounded-lg p-4 bg-white flex flex-col"
            >
              <img
                src=""
                className="w-full h-48 bg-gray-300 rounded-md object-cover"
                alt="Book Cover"
              />
              <div className="mt-4 space-y-1">
                <p className="text-2xl font-semibold text-gray-700">
                  {book.title}
                </p>
                <p className="text-gray-600">{book.author}</p>
                <div className="flex justify-between items-center px-8 py-2">
                  <p className="text-gray-800 font-medium">${book.price}</p>
                  <p className="text-gray-500">Qty: {book.quantity}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  className="flex-1 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md cursor-pointer"
                  onClick={() => handleEdit(book)}
                >
                  Edit
                </button>
                <button
                  className="flex-1 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer"
                  onClick={() => handleDele(book.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No book list</p>
      )}
    </div>
  );
};

export default BookList;
