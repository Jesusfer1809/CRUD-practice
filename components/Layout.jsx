import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children, isInIndex }) {
  return (
    <div className="w-full text-white min-h-screen flex flex-col">
      <Navbar isInIndex={isInIndex} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
