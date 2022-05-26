import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { API_BASE } from "../pages/config";

const useProfile = () => {
  const [profileLoading, setProfileLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;

    fetch(`${API_BASE}/user/${user?.email}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        setProfileLoading(false);
      });
  }, [user]);

  return [profile, profileLoading];
};

export default useProfile;
