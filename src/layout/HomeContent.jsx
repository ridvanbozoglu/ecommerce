import React from "react";
import ProductCardSm from "../components/ProductCardSm";
import BestSellerProducts from "../components/BestSellerProducts";

const HomeContent = () => {
  return (
    <div className="bg-[#FAFAFA] flex flex-col justify-center items-center">
      <ProductCardSm />
      <BestSellerProducts />
    </div>
  );
};

export default HomeContent;
