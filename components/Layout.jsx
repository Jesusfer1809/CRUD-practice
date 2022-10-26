import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children, isInIndex }) {
  return (
    <div className="w-full text-white min-h-screen flex flex-col">
      <Navbar isInIndex={isInIndex} />
      <div className="flex-grow w-full py-12 flex justify-center">
        <div className="w-full px-4 flex flex-col sm:w-4/5 lg:w-3/5">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
