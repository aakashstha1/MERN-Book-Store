import React from "react";
import { useAuth } from "../context/AuthContex";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate to={"/login"} />;
}

export default PrivateRoute;
