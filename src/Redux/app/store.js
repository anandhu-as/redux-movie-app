import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../features/movie/MovieSlice";
export const store = configureStore({
  reducer: {
    movies:MovieSlice
  },
});
