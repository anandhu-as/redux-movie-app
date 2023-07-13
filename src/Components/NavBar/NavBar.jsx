import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { username } = useSelector((state) => state.login.user);
  const { watchList } = useSelector((state) => state.movies);
  return (
    <div className="flex justify-between items-center bg-zinc-950 text-white py-4 px-6 fixed top-0 left-0 right-0">
      <Link to="/home" className="text-xl font-bold">
        <i className="fas fa-home mr-2"></i> Home
      </Link>
      <Link to="/watchlist" className="flex items-center ml-6 font-bold ">
        WatchList{" "}
        <span className="bg-red-400 text-white rounded-full px-2 py-1 ml-2">
          {watchList.length}
        </span>
      </Link>
      <Link to="/details" className="text-lg font-bold">
        <i className="fas fa-user mr-2"></i> {username}
      </Link>
    </div>
  );
};

export default NavBar;
