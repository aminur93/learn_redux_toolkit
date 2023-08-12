import { configureStore } from "@reduxjs/toolkit";
import  bookReducer  from "../features/Books/BooksSlice";

const store = configureStore({
    reducer: {
        booksReducer: bookReducer
    }
})

export default store;