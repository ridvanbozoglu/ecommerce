import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch, FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import NavBarLinks from "../components/NavBarLink";
import { AiOutlineHeart } from "react-icons/ai";

import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

const NavBar = () => {
  const user = useSelector((state) => state.client.user);

  return (
    <nav className="flex justify-center items-center">
      <div className="flex w-[80%] justify-between items-center my-[16px] ">
        <Link
          to="/"
          className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]"
        >
          Bandage
        </Link>
        <NavBarLinks />

        <div className="flex space-x-4">
          {user?.name ? (
            <Link
              to="/"
              className="hidden lg:flex items-center justify-center lg:text-[#23A6F0] text-[#252B42] p-[15px] gap-[5px]"
            >
              <Gravatar
                email={user.email}
                size={25}
                rating="pg"
                className="rounded-full"
              />
              {user.name}
            </Link>
          ) : (
            <Link
              to="/login"
              className="hidden  lg:flex items-center justify-center lg:text-[#23A6F0] text-[#252B42] p-[15px] gap-[5px]"
            >
              <CgProfile className="w-3.5 h-3.5" />
              <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">
                Login / Register
              </p>
            </Link>
          )}
          <div className=" p-2 rounded-full flex items-center justify-center">
            <FiSearch className="navbarIcons" />
          </div>
          <div className="p-2 rounded-full flex items-center justify-center">
            <CiShoppingCart className="navbarIcons" />
          </div>
          <div className="p-2 rounded-full flex items-center justify-center">
            <FiMenu className="navbarIcons lg:hidden" />
            <AiOutlineHeart className="navbarIcons hidden lg:block" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
