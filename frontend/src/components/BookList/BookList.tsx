import { useDispatch, useSelector } from "react-redux";
import "./BookList.css";
import { RootState } from "../../redux/store";
import { removeBook, toggleFavorite } from "../../redux/books-slice";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

export const BookList = () => {
  const booksListItems = useSelector((state: RootState) => state.books);
  const searchAuthorValue = useSelector(
    (state: RootState) => state.filter.author
  );
  const searchTitleValue = useSelector(
    (state: RootState) => state.filter.title
  );
  const isfavoriteBooks = useSelector(
    (state: RootState) => state.filter.isFavorite
  );
  const bookList = booksListItems.filter((book) =>
    book.title.toLowerCase().includes(searchTitleValue.toLowerCase()) &&
    book.author.toLowerCase().includes(searchAuthorValue.toLowerCase()) &&
    isfavoriteBooks
      ? book.isFavorite
      : true
  );
  const dispatch = useDispatch();
  const handleClickDelete = (bookId: string) => {
    dispatch(removeBook({ bookId }));
  };
  const handleToggleFavorite = (bookId: string) => {
    dispatch(toggleFavorite({ bookId }));
  };

  const highlightMatch = (text: string, filter: string) => {
    if (!filter) return text;
    const reg = new RegExp(`(${filter})`, "gi");
    return text.split(reg).map((substr, i) => {
      if (substr.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substr}
          </span>
        );
      }
      return substr;
    });
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {bookList ? (
        <ul>
          {bookList.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {highlightMatch(book.title, searchTitleValue)} by{" "}
                <strong>
                  {highlightMatch(book.author, searchAuthorValue)}
                </strong>
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
