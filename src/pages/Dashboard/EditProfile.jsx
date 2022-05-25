import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DashPage from "../../components/Layout/DashPage";

const EditProfile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

          <div className="mt-2">
            <input type="file" name="image" />
            <button className="px-5 py-3 bg-black mt-2 rounded-md text-white font-semibold">
              Update Image
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:col-span-2 md:col-span-3 flex flex-col gap-5"
        >
          <div>
            <h1 className="text-2xl font-bold">Username</h1>
            <input
              type="text"
              className="w-full md:w-96"
              placeholder="Username"
              {...register("username")}
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              <span>Email</span>
              <span className="text-zinc-500 text-sm"> (Can't change)</span>
            </h1>
            <p className="text-lg">mdshahriyaralam552@gmail.com</p>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Address</h1>
            <input
              type="text"
              className="w-full md:w-96"
              placeholder="Address"
              {...register("address")}
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">Phone</h1>
            <input
              type="text"
              className="w-full md:w-96"
              placeholder="Phone"
              {...register("phone")}
            />
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
