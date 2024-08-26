import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CiShoppingCart } from "react-icons/ci";

const links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Shop",
    link: "/",
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
    <nav className="flex bg-orange-400 justify-center">
      <div className="flex w-[80%] justify-between items-center bg-blue-300">
        <Link to="/">Bandage</Link>
        <ul className="flex">
          {links.map((el) => (
            <li key={el.text}>
              <Link to={el.link}>{el.text}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Link to="/"></Link>
          <div>
            <CiShoppingCart />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
