import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuthenticated }) {
  //const isAuthenticated = localStorage.getItem("isAuthenticated");
  //console.log("this", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
