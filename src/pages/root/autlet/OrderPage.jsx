import React from "react";
import { useSelector } from "react-redux";
import OrderCard from "../../../components/OrderCard";
import SuggectionsAndPrevOrders from "../../../components/SuggectionsAndPrevOrders";
import OrderDetail from "../../../components/OrderDetail";

const OrderPage = () => {
  const cartItems = useSelector((state) => state.shoppingCart.cart);

  return (
    <div className="w-full flex px-[10%]">
      <div className="flex-1 flex flex-col items-center mr-[20px]">
        <h2 className="text-2xl font-bold mb-4  w-full">
          Cart ({cartItems.length} products)
        </h2>
        {cartItems.length !== 0 ? (
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
              {cartItems.map((item) => (
                <OrderCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <p>Sepetinizde ürün bulunmamaktadır.</p>
        )}
        <SuggectionsAndPrevOrders />
      </div>
      <OrderDetail />
    </div>
  );
};

export default OrderPage;
