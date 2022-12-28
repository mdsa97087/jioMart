import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Logo from "../Pages/Logo/Logo";
import Search from "../Pages/Search/Search";

function AllRouter() {
  return (
    <Routes>
      <Route path="/logo" element={<Logo />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

export default AllRouter;
