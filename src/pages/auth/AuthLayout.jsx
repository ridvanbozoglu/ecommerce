import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full flex items-center min-h-[100vh]">
      <section className="flex-1 ">{children}</section>
      <div className="w-[50%] h-[100vh] hidden lg:block">
        <img
          src="public/ecommerceImg.jpg"
          alt="Logo"
          className="content-cover h-full"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
