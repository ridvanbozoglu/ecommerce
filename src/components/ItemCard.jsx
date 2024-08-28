import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ItemCard = (props) => {
  const { itemData } = props;

  return (
    <div className="lg:w-[33%] w-full flex flex-col items-center">
      <img src={itemData.imageUrl} alt={itemData.imageUrl} className="w-full" />
      <div>
        <h5 className="montserrat-h5 text-[#252B42]">{itemData.header}</h5>
        <Link
          to="#"
          className="text-[#737373] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center"
        >
          {itemData.explanation}
        </Link>
        <div className="flex gap-[10px] p-[25px] pb-[35px]">
          <h5 className="text-[#BDBDBD] montserrat-h5">
            $ {itemData.fullPrice}
          </h5>
          <h5 className="montserrat-h5 text-[#23856D]">
            $ {itemData.discount}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
