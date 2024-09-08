import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch, FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import NavBarLinks from "../components/NavBarLink";
import { AiOutlineHeart } from "react-icons/ai";

import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.client.user);
  const cart = useSelector((state) => state.shoppingCart.cart);

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

        <div className="flex space-x-4 relative">
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
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full lg:flex items-center justify-center lg:text-[#23A6F0] text-[#252B42] p-[15px] gap-[5px]"
          >
            <CiShoppingCart className="navbarIcons" />
            <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">
              Sepetim {cart.length}
            </p>
          </div>
          <div className="p-2 rounded-full flex items-center justify-center">
            <FiMenu className="navbarIcons lg:hidden" />
            <AiOutlineHeart className="navbarIcons hidden lg:block" />
          </div>
          {isOpen && cart.length > 0 && (
            <div className="absolute top-full left-0 rounded-md border px-4 py-3 z-30 bg-white shadow-lg">
              <h2 className="text-lg font-bold mb-2">
                Cart ({cart.length} items)
              </h2>
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <Link
                    to={`/product/${item.id}`}
                    key={item.id}
                    className="flex items-start py-2"
                  >
                    <div className="w-12 h-12">
                      <img
                        src={item.images[0]?.url || "/placeholder.jpg"}
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-bold">
                        {item.name}{" "}
                        <span className="text-gray-400">
                          {item.description}
                        </span>
                      </p>
                      <p className="text-sm">Quantity: {item.quantity}</p>
                      <p className="text-sm">${item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <Link
                  to="/cart"
                  className="text-sm text-blue-600 hover:text-blue-900"
                >
                  Go to Cart
                </Link>
                <Link
                  to="/checkout"
                  className="text-sm text-blue-600 hover:text-blue-900"
                >
                  End Order
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
