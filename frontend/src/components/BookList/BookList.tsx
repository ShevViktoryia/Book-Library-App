import { useDispatch, useSelector } from "react-redux";
import "./BookList.css";
import { RootState } from "../../redux/store";
import { removeBook } from "../../redux/books-slice";

export const BookList = () => {
  const booksListItems = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();
  const handleClickDelete = (bookId: string) => {
    dispatch(removeBook({ bookId }));
  };
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
              <div className="book-actions">
                <button onClick={() => handleClickDelete(book.id)}>
                  delete
                </button>
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
