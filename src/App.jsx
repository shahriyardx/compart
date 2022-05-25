import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./pages/Dashboard/AddProduct";
import EditProfile from "./pages/Dashboard/EditProfile";
import Dashboard from "./pages/Dashboard/Index";
import Profile from "./pages/Dashboard/Profile";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Purchase from "./pages/Purchase";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<Product />} />
        <Route path="/purchase/:productId" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/profile/edit" element={<EditProfile />} />

        <Route path="/dashboard/users" element={<Users />} />

        <Route path="/dashboard/products/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default App;
