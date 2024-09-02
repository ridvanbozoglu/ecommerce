import React from "react";
import { Link } from "react-router-dom";
import { IoMdAlarm } from "react-icons/io";
import { FaChartArea, FaChevronRight } from "react-icons/fa";

const HomeBigCard = (props) => {
  const { card } = props;
  return (
    <div className="light-drop-shadow">
      <div className="relative">
        <div className="h-[300px]">
          <img
            src={card.imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {card.isNew && (
          <div className="absolute font-[montserrat] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center top-[20px] left-[20px] bg-[#E74040] text-white light-drop-shadow rounded-[3px] px-[10px]">
            New
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[10px] p-[25px] pb-[35px]">
        <p className="flex gap-[15px]">
          {card.populer?.map((element) => (
            <Link
              key={element.name}
              to={element.link}
              className="text-[#252B42] text-[12px] leading-[16px] tracking-[0.2px]"
            >
              {element.name}
            </Link>
          ))}
        </p>
        <h4 className="montserrat-h4 text-[#252B42] text-left">
          {card.heading}
        </h4>
        <p className="font-[montserrat] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
          {card.paragraph}
        </p>
        <div className="flex justify-between">
          <p className="flex items-center gap-[5px]">
            <IoMdAlarm className="text-[#23A6F0]" /> {card.date}
          </p>
          <p className="flex items-center gap-[5px]">
            <FaChartArea className="text-[#23856D]" /> {card.numberOfComments}{" "}
            comments
          </p>
        </div>
        <Link
          to={card.link}
          className="text-[#737373] montserrat-h6 text-left flex items-center gap-[10px]"
        >
          Learn More <FaChevronRight className="text-[#23A6F0]" />
        </Link>
      </div>
    </div>
  );
};

export default HomeBigCard;
