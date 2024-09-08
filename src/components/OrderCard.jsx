import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
  toggleChecked,
} from "../redux/reducers/shoppingCartReducer";

const OrderCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityIncrease = () => {
    dispatch(
      updateCartItemQuantity({ id: item.id, quantity: item.quantity + 1 })
    );
  };

  const handleQuantityDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        updateCartItemQuantity({ id: item.id, quantity: item.quantity - 1 })
      );
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const handleToggleChecked = () => {
    dispatch(toggleChecked({ id: item.id }));
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg space-x-4 w-full">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={handleToggleChecked}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <img
        src={item.images[0].url}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex flex-col flex-1">
        <span className="text-lg font-semibold">{item.name}</span>
        <span className="text-sm text-gray-600">Adet: {item.quantity}</span>
        <span className="text-sm text-gray-600">Fiyat: {item.price} TL</span>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={handleQuantityDecrease}
          className="px-2 py-1 bg-gray-200 rounded-lg"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={handleQuantityIncrease}
          className="px-2 py-1 bg-gray-200 rounded-lg"
        >
          +
        </button>
      </div>

      <span className="text-lg font-bold">{item.price * item.quantity} TL</span>

      <button
        onClick={handleRemoveItem}
        className="px-3 py-1 bg-red-500 text-white rounded-lg"
      >
        Sil
      </button>
    </div>
  );
};

export default OrderCard;
