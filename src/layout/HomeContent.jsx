import React from "react";
import ProductCardSm from "../components/ProductCardSm";
import BestSellerProducts from "../components/BestSellerProducts";
import MostPopular from "../components/MostPopular";
import MostPopular2 from "../components/MostPopular2";
import BottomBestSeller from "../components/BottomBestSeller";
import Clients from "../components/Clients";
import FeaturedPosts from "../components/FeaturedPosts";

const HomeContent = () => {
  return (
    <div className="bg-[#FAFAFA] flex flex-col justify-center items-center">
      <ProductCardSm />
      <BestSellerProducts id={1} />
      <MostPopular />
      <BestSellerProducts id={2} />
      <MostPopular2 />
      <BottomBestSeller />
      <Clients />
      <FeaturedPosts />
    </div>
  );
};

export default HomeContent;
