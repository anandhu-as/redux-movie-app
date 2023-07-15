import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../../../MovieData/Data";
const initialState = {
  movieData: movies,
  watchList: [],
  liked: [],
};
const movieSlice = createSlice({
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
    liked: (state, action) => {
      const { data } = action.payload;
      const items = state.liked.find((item) => item.id === data.id);
      items ? alert("you already liked this movie") : state.liked.push(data);
    },
    logout: (state) => {
      state.user += initialState;
      state.watchList = [];
    },
  },
});
export default movieSlice.reducer;
export const { addMovie, removeMovie, logout, liked } = movieSlice.actions;
