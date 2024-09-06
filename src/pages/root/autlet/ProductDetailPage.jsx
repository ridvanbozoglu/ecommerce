import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchProductByIdThunk } from "../redux/reducers/productReducer";
import { Spinner } from "./ui/spinner";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.currentProduct);
  const isLoading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    dispatch(fetchProductByIdThunk(productId));
  }, [dispatch, productId]);

  return (
    <div className="p-6">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <button
            onClick={() => history.goBack()}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
          >
            Geri
          </button>
          <div className="flex flex-col items-center">
            <img
              src={product.images[0].url}
              alt={product.name}
              className="w-[300px] h-auto mb-6 object-cover rounded-lg shadow-lg"
            />
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-green-600">
              ${product.price}
            </p>
            <p className="text-gray-500">Stok: {product.stock}</p>
            <p className="text-gray-500">Rating: {product.rating}</p>
            <p className="text-gray-500">Satış: {product.sell_count}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
