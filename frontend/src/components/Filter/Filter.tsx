import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import {
  getOnlyFavorite,
  resetFilter,
  updateFilterAuthorValue,
  updateFilterTitleValue,
} from "../../redux/filter-slice";
import { ChangeEvent } from "react";
import { RootState } from "../../redux/store";

export const Filter = () => {
  const searchTitleValue = useSelector(
    (state: RootState) => state.filter.title
  );
  const searchAuthorValue = useSelector(
    (state: RootState) => state.filter.author
  );
  const isfavoriteBooks = useSelector(
    (state: RootState) => state.filter.isFavorite
  );

  const dispatch = useDispatch();

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilterTitleValue({ titleValue: e.currentTarget.value }));
  };
  const handleChangeAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilterAuthorValue({ authorValue: e.currentTarget.value }));
  };

  const handleResetBtn = () => {
    dispatch(resetFilter());
  };

  const handleGetFavoriteBooks = () => {
    dispatch(getOnlyFavorite());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            value={searchTitleValue}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author..."
            value={searchAuthorValue}
            onChange={handleChangeAuthor}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="favorite">
            <input
              type="checkbox"
              id="favorite"
              checked={isfavoriteBooks}
              onChange={handleGetFavoriteBooks}
            />
            Only Favorite
          </label>
        </div>
        <button onClick={handleResetBtn}>reset filter</button>
      </div>
    </div>
  );
};
