import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: Book[] = [];

type Book = {
  id: string;
  title: string;
  author: string;
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: (create) => ({
    addBook: create.reducer<{ title: string; author: string }>(
      (state, action) => {
        const newBook: Book = {
          title: action.payload.title,
          author: action.payload.author,
          id: nanoid(),
        };
        return [...state, newBook];
      }
    ),
    removeBook: create.reducer<{ bookId: string }>((state, action) => {
      return state.filter((book) => book.id !== action.payload.bookId);
    }),
  }),
});

export const booksReducer = booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
