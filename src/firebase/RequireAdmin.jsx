import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from ".";
import useProfile from "../hooks/useProfile";

const RequireAdmin = (props) => {
  const [user, loading] = useAuthState(auth);
  const [profile, profileLoading] = useProfile();
  const location = useLocation();

  if ((loading, profileLoading)) {
    return <p className="text-2xl">Loading..</p>;
  }

  if (!user || profile.role !== "Admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return props.children;
};

export default RequireAdmin;
