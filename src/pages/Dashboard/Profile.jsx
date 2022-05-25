import React from "react";
import { Link } from "react-router-dom";
import DashPage from "../../components/Layout/DashPage";

const Profile = () => {
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
          <div>
            <h1 className="text-2xl font-bold">Username</h1>
            <p className="text-lg">Awesome user</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Email</h1>
            <p className="text-lg">mdshahriyaralam552@gmail.com</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Address</h1>
            <p className="text-lg">Dhaka bangladesh</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Phone</h1>
            <p className="text-lg">+8801761333883</p>
          </div>
        </div>
      </div>
    </DashPage>
  );
};

export default Profile;
