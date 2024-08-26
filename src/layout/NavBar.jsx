import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch, FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import NavBarLinks from "../components/NavBarLink";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

const links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Shop",
    link: "/",
    down: FaAngleDown,
  },
  {
    text: "About",
    link: "/",
  },
  {
    text: "Blog",
    link: "/",
  },
  {
    text: "Contact",
    link: "/",
  },
  {
    text: "Pages",
    link: "/",
  },
];

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center">
      <div className="flex w-[80%] justify-between items-center my-[16px] ">
        <Link
          to="/"
          className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[
#252B42]"
        >
          Bandage
        </Link>
        <ul className="lg:flex hidden gap-4">
          {links.map((el) => (
            <NavBarLinks key={el.text} link={el} />
          ))}
        </ul>

        <div className="flex space-x-4">
          <Link
            to="/"
            className="hidden  lg:flex items-center justify-center lg:text-[#23A6F0] text-[#252B42] p-[15px] gap-[5px]"
          >
            <CgProfile className="w-3.5 h-3.5" />
            <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">
              Login / Register
            </p>
          </Link>
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
