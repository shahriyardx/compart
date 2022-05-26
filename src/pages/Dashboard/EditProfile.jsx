import React, { useState, useEffect } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import DashPage from "../../components/Layout/DashPage";
import { auth } from "../../firebase";
import useProfile from "../../hooks/useProfile";
import useSwal from "../../hooks/useSwal";
import { API_BASE } from "../config";

const EditProfile = () => {
  const Swal = useSwal();
  const [profile, profileLoading] = useProfile();
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const onSubmit = async (data) => {
    console.log(data);
    const { displayName, ...otherData } = data;

    await updateProfile({ displayName });
    fetch(`${API_BASE}/user/update`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email, ...otherData }),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          text: "Profile updated",
          icon: "success",
        });
      });
  };

  return (
    <DashPage>
      <div className="flex justify-between my-10">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Link
          className="px-5 py-3 bg-blue-500 rounded-lg text-white"
          to="/dashboard/profile"
        >
          Go to Profile
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:col-span-2 md:col-span-3 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span>Email</span>
                  <span className="text-zinc-500 text-sm"> (Can't change)</span>
                </h1>
                <p className="text-lg">{user?.email}</p>
              </div>

              <div>
                <h1 className="text-2xl font-bold">Username</h1>
                <input
                  type="text"
                  className="w-full"
                  placeholder="Username"
                  defaultValue={user?.displayName}
                  {...register("displayName", { required: true })}
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold">Address</h1>
                <input
                  type="text"
                  className="w-full"
                  placeholder="Address"
                  defaultValue={profile?.location}
                  {...register("location")}
                />
              </div>
            </div>

            <div>
              <div>
                <h1 className="text-2xl font-bold">Phone</h1>
                <input
                  type="text"
                  className="w-full"
                  placeholder="Phone"
                  defaultValue={profile?.phone}
                  {...register("phone")}
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold">Education</h1>
                <input
                  type="text"
                  className="w-full"
                  placeholder="Education"
                  defaultValue={profile?.education}
                  {...register("education")}
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold">Linkedin</h1>
                <input
                  type="text"
                  className="w-full"
                  placeholder="Linkedin"
                  defaultValue={profile?.linkedin}
                  {...register("linkedin")}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="px-5 py-3 bg-black mt-2 rounded-md text-white font-semibold"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </DashPage>
  );
};

export default EditProfile;
