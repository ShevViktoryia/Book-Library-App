import { useDispatch, useSelector } from "react-redux";
import "./BookList.css";
import { RootState } from "../../redux/store";
import { removeBook, toggleFavorite } from "../../redux/books-slice";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

export const BookList = () => {
  const booksListItems = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();
  const handleClickDelete = (bookId: string) => {
    dispatch(removeBook({ bookId }));
  };
  const handleToggleFavorite = (bookId: string) => {
    dispatch(toggleFavorite({ bookId }));
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
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkHeartFill className="star-icon" />
                  ) : (
                    <BsBookmarkHeart className="star-icon" />
                  )}
                </span>
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
