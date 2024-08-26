import React from "react";
import NavBar from "../../../layout/NavBar";
import CustomSlider from "../../../components/CustomSlider";
import ProductCardSm from "../../../layout/HomeContent";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <CustomSlider />
      <ProductCardSm />
    </div>
  );
};

export default HomePage;
