import React from "react";
import { useSelector } from "react-redux";
import { separateAndSortByRating, turkishToEnglish } from "../utils/utils";
import { useRouteMatch, Link } from "react-router-dom";

const ShopPageSmCard = () => {
  const match = useRouteMatch();
  const gender = match.params.gender;
  const categories = useSelector((state) => state.product.categories);
  const [maleCategories, femaleCategories] = separateAndSortByRating(
    categories,
    5
  );

  const categoriesToDisplay =
    gender === "erkek" ? maleCategories : femaleCategories;

  return (
    <div className="pb-[48px] flex flex-col lg:flex-row items-center justify-between gap-[15px] w-[80%]">
      {categoriesToDisplay.map((item, index) => (
        <Link
          className="lg:w-[18%] relative"
          key={index}
          to={`/shop/${gender}/${turkishToEnglish(item.title)}/${item.id}`}
        >
          <img src={item.img} alt="" />
          <div className="transformAbsoluteToMiddle text-white">
            <h5 className="montserrat-h5">{item.title}</h5>
            <p>{item.numberOfItems} Items</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopPageSmCard;
