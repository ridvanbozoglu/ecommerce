import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const clientsSrc = [
  "public/fa-brands-1.png",
  "public/fa-brands-2.png",
  "public/fa-brands-3.png",
  "public/fa-brands-4.png",
  "public/fa-brands-5.png",
];

const Clients = () => {
  return (
    <div className="w-[80%] flex flex-col lg:flex-row justify-between items-center py-[50px] gap-[50px]">
      {clientsSrc.map((client, index) => (
        <Link to={"#"} key={index}>
          <img src={client} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default Clients;
