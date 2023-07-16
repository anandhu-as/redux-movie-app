import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { username } = useSelector((state) => state.login.user);
  const { watchList, liked } = useSelector((state) => state.movies);

  return (
    <div className="flex justify-between items-center bg-zinc-950 text-white py-4 px-6 fixed top-0 left-0 right-0">
      <Link to="/home" className="text-xl font-bold">
        <i className="fas fa-home mr-2"></i> Home
      </Link>
      <div className="flex items-center">
        <Link to="/watchlist" className="ml-6 font-bold">
          WatchList
          <i className="fa-solid fa-bookmark ml-3"></i>
          <span className="text-white rounded-full px-2 py-1 ml-2">
            {watchList.length}
          </span>
        </Link>
        <Link to="/liked" className="ml-6 font-bold text-red-500">
          <i className="fa-solid fa-heart text-red-500 mr-1"></i> Liked
          <span className="text-red-500 rounded-full px-2 py-1 ml-2">
            {liked.length}
          </span>
        </Link>
        <Link to="/details" className="ml-6 font-bold">
          <i className="fas fa-user mr-2"></i> {username}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
