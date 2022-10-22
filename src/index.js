import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Commponents/Book";

// CSS
import "./index.css";

import { books } from "./Commponents/books.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <section className="bookList">
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            img={book.img}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </section>
  </React.StrictMode>
);
