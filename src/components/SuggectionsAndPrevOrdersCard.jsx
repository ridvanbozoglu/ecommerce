import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { addToCart } from "../redux/reducers/shoppingCartReducer";
import { useDispatch } from "react-redux";

const SuggectionsAndPrevOrdersCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <li className="flex items-center justify-between p-4 border border-gray-200 rounded-lg space-x-4 w-full">
      <img
        src={product.images[0].url}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex flex-col flex-1">
        <span className="text-lg font-semibold">{product.name}</span>
        <span className="text-lg font-light">{product.description}</span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="bg-gray-200  text-gray-800 font-semibold py-2 px-4 rounded">
          {quantity}
        </span>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <PrimaryButton onClick={handleAddToCart}>Sepete Ekle</PrimaryButton>
      <p className="text-sm text-gray-600 w-[10%]">Fiyat: {product.price} TL</p>
    </li>
  );
};

export default SuggectionsAndPrevOrdersCard;
