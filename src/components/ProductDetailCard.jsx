import React from "react";
import { Link } from "react-router-dom";

const ShopPageItemCard = ({ item, gender, categoryName }) => {
  // Ürün adına slug oluşturuyoruz
  const productSlug = item.name.toLowerCase().split(" ").join("-");

  return (
    <Link
      to={`/shop/${gender}/${categoryName}/${item.category_id}/${productSlug}/${item.id}`}
      className="block"
    >
      <div className="p-4 border rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
        <img
          src={item.images[0].url}
          alt={item.name}
          className="w-full h-auto object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
    </Link>
  );
};

export default ShopPageItemCard;
