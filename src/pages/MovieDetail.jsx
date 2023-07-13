import React from "react";
import { ImageUrl } from "../Constants/url";
const MovieDetail = ({ selectedMovie, setSelectedMovie }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 ">
      <div className="max-w-md mx-auto bg-zinc-950 p-4 rounded-lg">
        <img
          src={ImageUrl + selectedMovie.poster_path}
          alt=""
          className="w-32 h-auto mx-auto mb-4"
        />
        <h2 className="text-white font-bold mb-4">
          {selectedMovie.title
            ? selectedMovie.title
            : selectedMovie.original_title}
        </h2>
        <h2 className="text-white">{selectedMovie.media_type}</h2>
        <h2 className="text-white">
          language : {selectedMovie.original_language}
        </h2>
        <h2 className="text-white">
          release date : {selectedMovie.release_date}
        </h2>{" "}
        <br />
        <p className="text-white">{selectedMovie.overview}</p>
        <button
          className="px-4 py-2 mt-4 text-white bg-slate-500 rounded-md hover:bg-blue-600"
          onClick={() => setSelectedMovie(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
