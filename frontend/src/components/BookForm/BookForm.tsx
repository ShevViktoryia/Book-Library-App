import { FormEvent, useState } from "react";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import { addBook, fetchBook } from "../../redux/books-slice";
import booksData from "../../data/books.json";
import { AppDispatch } from "../../redux/store";

export const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (author && title) {
      dispatch(addBook({ title, author }));
      setTitle("");
      setAuthor("");
    }
  };

  const handleAddRandomBook = () => {
    const randomInd = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomInd];
    dispatch(addBook(randomBook));
  };

  const handleAddRandomViaAPI = () => {
    dispatch(fetchBook());
  };

  return (
    <div className="app-block book-form">
      <h2>Add a new book</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.currentTarget.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};
