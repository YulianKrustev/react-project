import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Commponents/Book";

// CSS
import "./index.css";

// Setup vars
const books = [
  {
    id: "01",
    img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: "02",
    img: "https://m.media-amazon.com/images/I/41VsfjWEvSL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Spooky Pookie (Little Pookie) ",
    author: "Sandra Boynton",
  },
  {
    id: "03",
    img: "https://m.media-amazon.com/images/I/41vrqy7DkaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Go-To Dinners: A Barefoot Contessa Cookbook",
    author: "Ina Garten",
  },
  {
    id: "04",
    img: "https://m.media-amazon.com/images/I/51430n+9jlL._SY344_BO1,204,203,200_.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr. (Author), Eric Carle (Author)",
  },
  {
    id: "05",
    img: "https://m.media-amazon.com/images/I/51bZujlJxlL._SX422_BO1,204,203,200_.jpg",
    title:
      "Harry Potter and the Order of the Phoenix: The Illustrated Edition (Harry Potter, Book 5) (Illustrated edition)",
    author: "J. K. Rowling",
  },
];

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
