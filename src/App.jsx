import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireAdmin from "./firebase/RequireAdmin";
import RequireAuth from "./firebase/RequireAuth";
import Blog from "./pages/Blog";
import AddProduct from "./pages/Dashboard/AddProduct";
import EditProfile from "./pages/Dashboard/EditProfile";
import Dashboard from "./pages/Dashboard/Index";
import MyOrders from "./pages/Dashboard/MyOrders";
import Orders from "./pages/Dashboard/Orders";
import Payment from "./pages/Dashboard/Payment";
import Products from "./pages/Dashboard/Products";
import Profile from "./pages/Dashboard/Profile";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<Product />} />
        <Route
          path="/purchase/:productId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard/profile/edit"
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard/users"
          element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }
        />

        <Route
          path="/dashboard/products"
          element={
            <RequireAdmin>
              <Products />
            </RequireAdmin>
          }
        />
        <Route
          path="/dashboard/products/add"
          element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>
          }
        />

        <Route
          path="/dashboard/orders"
          element={
            <RequireAdmin>
              <Orders />
            </RequireAdmin>
          }
        />
        <Route
          path="/dashboard/orders/my"
          element={
            <RequireAuth>
              <MyOrders />
            </RequireAuth>
          }
        />

        <Route path="/dashboard/pay/:orderId" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default App;
