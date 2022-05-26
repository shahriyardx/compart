import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import useProfile from "../../hooks/useProfile";
import NavLink from "./NavLink/NavLink";

const Sidebar = ({ open, setOpen }) => {
  const [profile, profileLoading] = useProfile();
  return (
    <div
      className={`bg-zinc-800 h-screen transition-all text-zinc-200 fixed lg:static top-0 w-full max-w-[300px] ${
        open ? "left-0" : "-left-full"
      }`}
    >
      <div className="h-16 bg-zinc-700 flex justify-between px-4 items-center">
        <span className="text-xl md:text-2xl font-black">Dashboard</span>
        <BiX
          className="text-3xl text-red-500 lg:hidden"
          onClick={() => setOpen(false)}
        />
      </div>

      <div className="flex flex-col">
        <NavLink to="/dashboard/profile">My Profile</NavLink>
        {profile?.role == "Customer" && (
          <NavLink to="/dashboard/orders/my">My Orders</NavLink>
        )}
        {profile?.role == "Admin" && (
          <>
            <NavLink to="/dashboard/products">Products</NavLink>
            <NavLink to="/dashboard/users">All Users</NavLink>
            <NavLink to="/dashboard/products/add">Add Product</NavLink>
            <NavLink to="/dashboard/orders">All Orders</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
