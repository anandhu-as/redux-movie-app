import React, { useState } from "react";
import { ImageUrl } from "../Constants/url";
import { useDispatch } from "react-redux";
import { addMovie, liked } from "../Redux/features/movie/MovieSlice";
import MovieDetail from "./MovieDetail";
const Movies = ({ movieData }) => {
  const dispatch = useDispatch();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleAddToWatchlist = (data) => dispatch(addMovie({ data }));
  const handleMovieClick = (data) => setSelectedMovie(data);
  const handleLike = (data) => dispatch(liked({ data }));
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {movieData.map((data) => {
        const isSelected = selectedMovie && selectedMovie.id === data.id;
        const blurClass = selectedMovie ? (isSelected ? "" : "blur") : "";
        return (
          <div
            key={data.id}
            className={`flex flex-col items-center h-full pt-8 mt-10 movie-card ${blurClass}`}
          >
            <img
              src={ImageUrl + data.poster_path}
              alt={data.title}
              className="w-full h-auto rounded-lg mb-2 cursor-pointer"
              onClick={() => handleMovieClick(data)}
            />
            <h5 className="text-center text-white">
              {data.title ? data.title : data.original_title}
            </h5>
            <i
              className="fa-solid fa-heart px-4 py-2 mt-auto text-white w-8 h-8  cursor-pointer hover:text-red-600"
              onClick={() => handleLike(data)}
            ></i>
            <button
              className="px-4 py-2 mt-auto text-white bg-slate-500 rounded-md hover:bg-blue-600 animate-pulse"
              onClick={() => handleAddToWatchlist(data)}
            >
              Add to Watchlist <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        );
      })}
      {selectedMovie && (
        <MovieDetail
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </div>
  );
};

export default Movies;
