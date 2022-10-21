import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Commponents/Book";

// CSS
import "./index.css";

// Setup vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  </React.StrictMode>
);
