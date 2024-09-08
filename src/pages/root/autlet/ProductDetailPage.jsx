import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  fetchProductByIdThunk,
  setCurrentProduct,
} from "../../../redux/reducers/productReducer";
import { Spinner } from "../../../components/ui/spinner";
import PrimaryButton from "../../../components/PrimaryButton";
import { addToCart } from "../../../redux/reducers/shoppingCartReducer";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.shoppingCart.cart);

  // Sepetteki ürünü kontrol et ve miktarı ayarla
  const [quantity, setQuantity] = useState(
    cart.find((item) => item.id === productId)?.quantity || 1
  );

  const product = useSelector((state) => state.product.currentProduct);
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(productId));
    return () => {
      dispatch(setCurrentProduct({}));
    };
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
    };
    dispatch(addToCart(cartItem));
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!product) {
    return <p>Ürün bulunamadı.</p>;
  }

  if (error) {
    return <p>Hata: {error}</p>;
  }

  return (
    <div className="p-6">
      <button
        onClick={() => history.goBack()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Geri
      </button>
      <div className="flex flex-col items-center">
        {product.images && product.images.length > 0 && (
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-[300px] h-auto mb-6 object-cover rounded-lg shadow-lg"
          />
        )}
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-green-600">${product.price}</p>
        <p className="text-gray-500">Stok: {product.stock}</p>
        <p className="text-gray-500">Rating: {product.rating}</p>
        <p className="text-gray-500">Satış: {product.sell_count}</p>
        <div>
          <div>
            <PrimaryButton
              onClick={() => {
                quantity > 1 && setQuantity(quantity - 1);
              }}
            >
              -
            </PrimaryButton>
            <span className="mx-4">{quantity}</span>
            <PrimaryButton
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </PrimaryButton>
          </div>
          <PrimaryButton onClick={handleAddToCart}>Sepete Ekle</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
