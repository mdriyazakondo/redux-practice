import React, { useState } from "react";
import BookList from "./components/BookList";
import BookFrom from "./components/BookFrom";

const Book = () => {
  const [bookToEdit, setBookToEdit] = useState(null);
  const handleEdit = (book) => {
    setBookToEdit(book);
  };

  const handleCencelEdit = () => {
    setBookToEdit(null);
  };
  return (
    <div>
      <BookFrom bookToEdit={bookToEdit} onCencel={handleCencelEdit} />
      <BookList onhandleEdit={handleEdit} />
    </div>
  );
};

export default Book;
