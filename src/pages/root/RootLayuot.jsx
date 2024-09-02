import React from "react";
import Footer from "../../layout/Footer";
import NavBar from "../../layout/NavBar";

const RootLayuot = ({ children }) => {
  return (
    <div className="w-full flex flex-col">
      <NavBar />
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default RootLayuot;
