import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { suggestedProductsThunk } from "../redux/reducers/productReducer";
import { Spinner } from "./ui/spinner";
import SuggectionsAndPrevOrdersCard from "./SuggectionsAndPrevOrdersCard";

const SuggectionsAndPrevOrders = () => {
  const [active, setActive] = useState("suggestedProducts");
  const dispatch = useDispatch();
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tab) => {
    setActive(tab);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(suggestedProductsThunk())
      .then((response) => {
        setSuggestedProducts(response.payload.products);
        console.log(response);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <div className="w-full">
      <div className="flex gap-[20px] my-3 w-full border-b-[1px]">
        <div
          className={`pb-3 cursor-pointer ${
            active === "suggestedProducts" ? "border-b-[2px] border-[red]" : ""
          }`}
          onClick={() => handleTabChange("suggestedProducts")}
        >
          Suggested Products
        </div>
        <div
          className={`pb-3 cursor-pointer ${
            active === "previousOrders" ? "border-b-[2px] border-[red]" : ""
          }`}
          onClick={() => handleTabChange("previousOrders")}
        >
          Previous Orders
        </div>
      </div>

      {active === "previousOrders" ? (
        <div>There is no order yet</div>
      ) : isLoading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <div>
          {suggestedProducts?.length > 0 ? (
            <ul>
              {suggestedProducts.map((product) => (
                <SuggectionsAndPrevOrdersCard
                  key={product.id}
                  product={product}
                />
              ))}
            </ul>
          ) : (
            "No products available"
          )}
        </div>
      )}
    </div>
  );
};

export default SuggectionsAndPrevOrders;
