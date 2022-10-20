import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>;
};

const Autohor = () => {
  return <h4>Amelia Hepworth</h4>;
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Autohor />
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  </React.StrictMode>
);
