import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const RootLayuot = ({ children }) => {
  return (
    <div className="w-full flex flex-col">
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default RootLayuot;
