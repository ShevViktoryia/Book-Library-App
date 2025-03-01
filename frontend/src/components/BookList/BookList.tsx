import { useSelector } from "react-redux";
import "./BookList.css";
import { RootState } from "../../redux/store";

export const BookList = () => {
  const booksListItems = useSelector((state: RootState) => state.books);
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {booksListItems ? (
        <ul>
          {booksListItems.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No book available</p>
      )}
    </div>
  );
};
