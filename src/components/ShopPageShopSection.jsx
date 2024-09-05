import React, { useEffect, useState } from "react";

import ShopPageSmCard from "./ShopPageSmCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaChevronRight } from "react-icons/fa";
import ShopFilter from "./ShopFilter";
import ShopPageItemContainer from "./ShopPageItemContainer";
import Clients from "./Clients";

const ShopPageShopSection = () => {
  return (
    <div className="bg-[#FAFAFA] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center lg:flex-row flex-col justify-between py-[24px] w-[80%]">
          <h3 className="montserrat-h3">Shop</h3>
          <div className="text-[#BDBDBD] flex items-center gap-[15px] py-[10px]">
            <Link>Home</Link>
            <FaChevronRight />
            <Link>Shop</Link>
          </div>
        </div>
        <ShopPageSmCard />
        <ShopFilter />
        <ShopPageItemContainer />
        <Clients />
      </div>
    </div>
  );
};

export default ShopPageShopSection;
