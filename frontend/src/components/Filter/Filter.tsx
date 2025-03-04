import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import { resetFilter, updateFilterValue } from "../../redux/filter-slice";
import { ChangeEvent } from "react";
import { RootState } from "../../redux/store";

export const Filter = () => {
  const searchValue = useSelector((state: RootState) => state.filter.search);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilterValue({ searchValue: e.currentTarget.value }));
  };
  const handleResetBtn = () => {
    dispatch(resetFilter());
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            value={searchValue}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleResetBtn}>reset filter</button>
      </div>
    </div>
  );
};
