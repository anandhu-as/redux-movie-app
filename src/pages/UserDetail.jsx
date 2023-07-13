import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { logout } from "../Redux/features/login/LoginSlice";

const UserDetail = () => {
  const { username, email } = useSelector((state) => state.login.user);
  const { watchList } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt=""
          className="w-24 h-24 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">{username}</h1>
        <h2 className="text-lg text-gray-500">{email}</h2>
        <h2>
          {username} added {watchList.length} movies on watchList
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
