import { Button } from "@mui/material";
import React from "react";

const Books = ({ books, onDelete, openModal }) => {
  console.log(books);
  return (
    <>
      {books.map((book) => (
        <div className="Book" key={book.id}>
          <div className="Book-Img"></div>
          <div>
            <h3>{book.title}</h3>
            <p>{book.category}</p>
            <Button
              onClick={() => openModal(book)}
              variant="contained"
              color="primary"
              style={{ margin: 4 }}
            >
              Update
            </Button>
            <Button
              onClick={() => onDelete(book.id)}
              variant="contained"
              color="accent"
              style={{ margin: 4 }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Books;
