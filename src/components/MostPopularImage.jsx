import React from "react";

const MostPopularImage = (props) => {
  const { src, order } = props;

  return (
    <div className={`flex-1 h-full ${order ? `order-${order}` : ""}`}>
      <img src={src} alt="motorguy" className="object-cover h-full" />
    </div>
  );
};

export default MostPopularImage;
