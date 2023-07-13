import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImageUrl } from "../../Constants/url";
import { removeMovie } from "../../Redux/features/movie/MovieSlice";

const WatchList = () => {
  const dispatch = useDispatch();
  const { watchList } = useSelector((state) => state.movies);
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 ml-5 mt-32">
      {watchList.map((data) => {
        return (
          <div key={data.id} className="flex flex-col items-center border">
            <img
              src={ImageUrl + data.poster_path}
              alt={data.title}
              className="w-40 h-auto rounde d-lg mb-2"
            />
            <button
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={() => dispatch(removeMovie(data.id))}
            >
              Remove
            </button>
            <h5 className="text-white font-bold mt-2">{data.title}</h5>
            <h4 className="text-white">Type: {data.media_type}</h4>
            <h6 className="text-white">Release Date: {data.release_date}</h6>
            <p className="text-white">{data.overview}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WatchList;
