import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import DashPage from "../../components/Layout/DashPage";
import { auth } from "../../firebase";
import { API_BASE } from "../config";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;

    fetch(`${API_BASE}/user/${user?.email}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, [user]);

  return (
    <DashPage>
      <div className="flex justify-between my-10">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Link
          className="px-5 py-3 bg-blue-500 rounded-lg text-white"
          to="/dashboard/profile/edit"
        >
          Edit Profile
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-10">
        <div>
          <img
            className="w-full aspect-square object-cover rounded-xl"
            src="/images/demo/profile.jpg"
            alt=""
          />
        </div>

        <div className="sm:col-span-2 md:col-span-3 flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div>
                <h1 className="text-2xl font-bold">Username</h1>
                <p className="text-lg">{user?.displayName}</p>
              </div>

              <div>
                <h1 className="text-2xl font-bold">Email</h1>
                <p className="text-lg">
                  {user?.email}{" "}
                  <span
                    className={`text-sm ${
                      user?.emailVerified ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    ({user?.emailVerified ? "Verified" : "Unverified"})
                  </span>
                </p>
              </div>

              <div>
                <h1 className="text-2xl font-bold">Address</h1>
                <p className="text-lg">{profile.location || "Not set"}</p>
              </div>
            </div>

            <div>
              <div>
                <h1 className="text-2xl font-bold">Phone</h1>
                <p className="text-lg">{profile.phone || "Not set"}</p>
              </div>

              <div>
                <h1 className="text-2xl font-bold">Education</h1>
                <p className="text-lg">{profile.education || "Not set"}</p>
              </div>

              <div>
                <h1 className="text-2xl font-bold">Linkedin</h1>
                <p className="text-lg">{profile.linkedin || "Not set"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashPage>
  );
};

export default Profile;
