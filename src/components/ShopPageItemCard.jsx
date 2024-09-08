import React from "react";
import { Link } from "react-router-dom";

const ShopPageItemCard = ({ item, categoryName, gender }) => {
  const productSlug = item.name.toLowerCase().split(" ").join("-");
  const link = `/shop/${gender}/${categoryName}/${item.category_id}/${productSlug}/${item.id}`;
  return (
    <Link to={link} className="flex flex-col lg:w-[20%]">
      <div>
        <img
          src={item.images[0].url}
          alt=""
          className="w-full hover:scale-125"
        />
      </div>
      <div className="flex flex-col gap-[10px] p-[25px] pb-[35px] items-center">
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <div className="flex items-center gap-[5px] py-[5px] px-[3px] ">
          <h5 className="text-[#BDBDBD] montserrat-h5">$ {item.price}</h5>
          <h5 className="montserrat-h5 text-[#23856D]">$ {item.price}</h5>
        </div>
        {item.colors && (
          <div className="flex gap-[6px]">
            {item.colors.map((element) => (
              <div
                key={element}
                style={{ backgroundColor: element }}
                className="w-4 h-4 rounded-full"
              ></div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ShopPageItemCard;
