import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiredAuth = ({ children }) => {
  const { email } = useSelector((state) => state.movies.user);
  if (!email) {
    return <Navigate to="/" />;
    {
      /* if not logged in ? navigate back to login page */
    }
  }
  return <div>{children}</div>;
};

export default RequiredAuth;
