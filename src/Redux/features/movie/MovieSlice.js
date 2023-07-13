import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../../../MovieData/Data";
const initialState = {
  movieData: movies,
  watchList: [],
};
const MovieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovie: (state, action) => {
      const { data } = action.payload;
      const similarItems = state.watchList.find((item) => item.id === data.id);
      similarItems
        ? alert("item is already on watchlist")
        : state.watchList.push({ ...data });
    },
    removeMovie: (state, action) => {
      state.watchList = state.watchList.filter(
        (item) => item.id !== action.payload
      );
    },
    logout: (state) => {
      state.user += initialState;
      state.watchList = [];
    },
  },
});
export default MovieSlice.reducer;
export const { addMovie, removeMovie, logout } = MovieSlice.actions;
