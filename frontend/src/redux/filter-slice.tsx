import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: (create) => ({
    updateFilterValue: create.reducer<{ searchValue: string }>(
      (state, action) => {
        return { ...state, search: action.payload.searchValue };
      }
    ),
    resetFilter: create.reducer(() => {
      return initialState;
    }),
  }),
});

export const filterReducer = filterSlice.reducer;
export const { updateFilterValue, resetFilter } = filterSlice.actions;
