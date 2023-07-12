import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../../../MovieData/Data";

const initialState = {
  movieData: movies,
  watchList: [],
  user: { email: "", username: "" },
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
    login: (state, action) => {
      state.user=action.payload
    },
  },
});
export default MovieSlice.reducer;
export const { addMovie, removeMovie ,login} = MovieSlice.actions;
