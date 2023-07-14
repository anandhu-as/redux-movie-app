import React from "react";
import { useSelector } from "react-redux";
import { ImageUrl } from "../../Constants/url";

const Liked = () => {
  const { liked } = useSelector((state) => state.movies);
  console.log(liked);
  return (
    <div className="flex flex-wrap justify-center">
      {liked.map((data) => {
        return (
          <div key={data.id} className="m-4 w-64 pt-20">
            <img
              src={ImageUrl + data.poster_path}
              alt=""
              className="w-auto h-auto rounded-lg"
            />
            <h2 className="text-white font-semibold mt-2">{data.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Liked;
