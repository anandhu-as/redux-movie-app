import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movie/MovieSlice";
import LoginSlice from "../features/login/LoginSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    login: LoginSlice,
  },
});
