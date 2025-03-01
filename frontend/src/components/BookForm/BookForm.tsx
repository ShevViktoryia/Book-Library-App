import { FormEvent, useState } from "react";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books-slice";

export const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (author && title) {
      dispatch(addBook({ title, author }));
      setTitle("");
      setAuthor("");
    }
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
      </form>
    </div>
  );
};
