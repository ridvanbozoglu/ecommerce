import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MostPopularCard = (props) => {
  const { item, totalSale, colorPalette } = props;
  return (
    <div className="py-[80px] flex flex-col gap-[19px] w-full lg:w-[400px] items-center">
      <h3 className="montserrat-h3 text-[#252B42]">{item.header}</h3>
      <p className="text-[#737373] font-[montserrat] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-center">
        {item.paragraph}
      </p>
      <img src={item.imageUrl} alt="" />
      <div className="flex flex-col items-center gap-[15px]">
        <Link
          to={item.link}
          className="text-[#737373] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center"
        >
          {item.linkP}
        </Link>
        {totalSale && (
          <p className="text-[#737373] font-[montserrat] font-bold text-[14px] leading-[24px] tracking-[0.2px] flex items-center gap-[10px]">
            <MdOutlineFileDownload />
            {totalSale} Sales
          </p>
        )}
        <div className="flex items-center gap-[5px] py-[5px] px-[3px] ">
          <h5 className="text-[#BDBDBD] montserrat-h5">$ {item.fullPrice}</h5>
          <h5 className="montserrat-h5 text-[#23856D]">
            $ {item.discountedPrice}
          </h5>
        </div>
        {colorPalette && (
          <div className="flex gap-[6px]">
            {colorPalette.map((element) => (
              <div
                key={element}
                style={{ backgroundColor: element }}
                className="w-4 h-4 rounded-full"
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MostPopularCard;
