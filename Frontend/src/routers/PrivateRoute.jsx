import React from "react";
import { useAuth } from "../context/AuthContex";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  if (currentUser) {
    return children;
  }
  return <Navigate to={"/login"} />;
}

export default PrivateRoute;
