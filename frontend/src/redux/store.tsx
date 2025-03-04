import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./books-slice";
import { filterReducer } from "./filter-slice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
