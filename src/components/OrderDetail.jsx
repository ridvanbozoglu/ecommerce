import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const totalPrice = cart.reduce((total, item) => {
    if (item.checked) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);
  const shipping = totalPrice !== 0 ? 29.99 : 0;
  const discount = totalPrice > 150 ? shipping : 0;

  return (
    <div className="lg:w-[30%]">
      <div className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg space-y-4 ">
        <h4 className="montserrat-h3 w-full">Order Detail</h4>
        <div className="w-full border-b-[1px] py-[10px]">
          <p className="flex justify-between">
            <span>Total Price</span> <span>{totalPrice} TL</span>
          </p>
          {totalPrice !== 0 && (
            <p className="flex justify-between">
              <span>Shipping </span> <span>{shipping} TL</span>
            </p>
          )}

          {totalPrice > 150 && (
            <p className="flex justify-between gap-[20px]">
              <span>Free shipping for orders over 150 TL</span>
              <span className="flex-shrink-0">-{discount} TL</span>
            </p>
          )}
        </div>
        <div className="w-full flex justify-between ">
          <p>Total :</p>
          <p>{totalPrice + shipping - discount} TL</p>
        </div>
      </div>
      <div>
        <Link
          to="/create-order"
          className="block mt-2 text-center bg-blue-500 text-white py-2 px-4 rounded-lg w-full h-full"
        >
          Confirm Cart
        </Link>
      </div>
    </div>
  );
};

export default OrderDetail;
