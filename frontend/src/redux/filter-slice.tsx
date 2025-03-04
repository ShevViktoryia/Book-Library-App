import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: (create) => ({
    updateFilterTitleValue: create.reducer<{ titleValue: string }>(
      (state, action) => {
        return { ...state, title: action.payload.titleValue };
      }
    ),
    updateFilterAuthorValue: create.reducer<{ authorValue: string }>(
      (state, action) => {
        return { ...state, author: action.payload.authorValue };
      }
    ),
    resetFilter: create.reducer(() => {
      return initialState;
    }),
  }),
});

export const filterReducer = filterSlice.reducer;
export const { updateFilterTitleValue, updateFilterAuthorValue, resetFilter } =
  filterSlice.actions;
