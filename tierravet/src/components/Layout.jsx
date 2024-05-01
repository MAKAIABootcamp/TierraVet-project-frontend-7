import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="min-h-screen relative">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
