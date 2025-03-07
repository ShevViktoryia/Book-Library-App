import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: Book[] = [];

type Book = {
  id: string;
  title: string;
  author: string;
  isFavorite: boolean;
};

export const fetchBook = createAsyncThunk<Book, void>(
  "books/fetchBook",
  async () => {
    const res = await axios.get("http://localhost:4000/random-book");
    return res.data;
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: (create) => ({
    addBook: create.reducer<{ title: string; author: string }>(
      (state, action) => {
        const newBook: Book = {
          title: action.payload.title,
          author: action.payload.author,
          isFavorite: false,
          id: nanoid(),
        };
        return [...state, newBook];
      }
    ),
    removeBook: create.reducer<{ bookId: string }>((state, action) => {
      return state.filter((book) => book.id !== action.payload.bookId);
    }),
    toggleFavorite: create.reducer<{ bookId: string }>((state, action) => {
      return state.map((book) =>
        book.id === action.payload.bookId
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    }),
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      const newBook: Book = {
        title: action.payload.title,
        author: action.payload.author,
        isFavorite: false,
        id: nanoid(),
      };
      if (action.payload.title && action.payload.author) state.push(newBook);
    });
  },
});

export const booksReducer = booksSlice.reducer;
export const { addBook, removeBook, toggleFavorite } = booksSlice.actions;
