import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../redux/features/filter/filterSlice";
import { bookSlice } from "../redux/features/books/bookSlice";

export const store = configureStore({
    reducer: {
        [filterSlice.name]: filterSlice.reducer,
        [bookSlice.reducerPath]: bookSlice.reducer
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(bookSlice.middleware),
})