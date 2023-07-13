import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { logout } from "../Redux/features/movie/MovieSlice";

const UserDetail = () => {
  const { username, email } = useSelector((state) => state.login.user);
  const { watchList } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <i className="fas fa-user text-white" style={{ fontSize: "2rem" }}></i>
        <h1 className="text-2xl font-bold text-white">{username}</h1>
        <h2 className="text-lg text-white">{email}</h2>
        <h2 className="text-white">
          {watchList.length == 0
            ? "no movies on watchlist"
            : `${username} added ${watchList.length} movies on watchList`}
        </h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-6"
          onClick={() => dispatch(logout())}
        >
          <Link to="/"> Logout</Link>
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
