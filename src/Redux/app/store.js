import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../features/movie/MovieSlice";
import LoginSlice from "../features/login/LoginSlice";

export const store = configureStore({
  reducer: {
    movies: MovieSlice,
    login: LoginSlice,
  },
});
