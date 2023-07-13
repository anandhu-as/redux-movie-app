import React from "react";
import { ImageUrl } from "../Constants/url";
import { useDispatch } from "react-redux";
import { addMovie } from "../Redux/features/movie/MovieSlice";

const Movies = ({ movieData }) => {
  const dispatch = useDispatch();

  const handleAddToWatchlist = (data) => {
    dispatch(addMovie({ data }));
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {movieData.map((data) => {
        return (
          <div
            key={data.id}
            className="flex flex-col items-center h-full pt-8 mt-10 movie-card"
          >
            <img
              src={ImageUrl + data.poster_path}
              alt={data.original_title ? data.original_title : data.title}
              className="w-full h-auto rounded-lg mb-2 cursor-pointer"
            />
            <h5 className="text-center text-white">
              {data.title ? data.title : data.original_title}
            </h5>
            <button
              className="px-4 py-2 mt-auto text-white bg-slate-500 rounded-md hover:bg-red-600"
              onClick={() => handleAddToWatchlist(data)}
            >
              Add to Watchlist
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
