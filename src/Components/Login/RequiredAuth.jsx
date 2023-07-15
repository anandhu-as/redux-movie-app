import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
{
  /* protected routes */
}
const RequiredAuth = ({ children }) => {
  const { email } = useSelector((state) => state.login.user);
  if (!email) {
    return <Navigate to="/" />;
    {
      /* if not logged in ? navigate back to login page */
    }
  }
  return <div>{children}</div>;
};

export default RequiredAuth;