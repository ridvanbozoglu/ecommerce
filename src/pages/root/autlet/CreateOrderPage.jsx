import React, { useState } from "react";
import OrderDetail from "../../../components/OrderDetail";
import AdressOptions from "../../../components/AdressOptions";

const CreateOrderPage = () => {
  const [active, setActive] = useState("adress");
  const [activeAdress, setActiveAdress] = useState({});

  const handleTabChange = (tab) => {
    setActive(tab);
  };
  return (
    <div className="w-full flex">
      <div className="flex-1">
        <div className="flex gap-[20px] my-3 w-full border-b-[1px]">
          <div
            className={`pb-3 cursor-pointer ${
              active === "adress" ? "border-b-[2px] border-[red]" : ""
            }`}
            onClick={() => handleTabChange("adress")}
          >
            Adress Information
          </div>
          <div
            className={`pb-3 cursor-pointer ${
              active === "payment" ? "border-b-[2px] border-[red]" : ""
            }`}
            onClick={() => handleTabChange("payment")}
          >
            Payment Options
          </div>
        </div>
        {active === "adress" ? (
          <AdressOptions
            setActiveAdress={setActiveAdress}
            activeAdress={activeAdress}
          />
        ) : (
          <div>payment</div>
        )}
      </div>
      <OrderDetail />
    </div>
  );
};

export default CreateOrderPage;
