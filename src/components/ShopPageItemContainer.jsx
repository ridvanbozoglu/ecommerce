import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import {
  productsThunk,
  setProductList,
} from "../redux/reducers/productReducer";
import ShopPageItemCard from "./ShopPageItemCard";
import { Spinner } from "./ui/spinner";

const ShopPageItemContainer = () => {
  const params = useParams();
  const location = useLocation();

  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const total = useSelector((state) => state.product.total);

  const searchParams = new URLSearchParams(location.search);
  const order = searchParams.get("order") || "price:asc";
  const filter = searchParams.get("filter") || "";

  useEffect(() => {
    dispatch(setProductList([]));
    setOffset(0);
  }, [params, order, filter]);

  useEffect(() => {
    dispatch(
      productsThunk({
        categoryId: params.categoryId,
        offset: offset,
        order: order,
        filter: filter,
      })
    );
  }, [dispatch, params, offset, order, filter]);

  const productList = useSelector((state) => state.product.productList);

  return (
    <div className="w-full flex flex-col items-center justify-center my-[48px] px-[30px]">
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-[30px] justify-between w-[80%]">
        {productList.length > 0 ? (
          productList.map((item) => (
            <ShopPageItemCard key={item.id} item={item} />
          ))
        ) : total > 0 ? (
          <Spinner />
        ) : (
          <h2>No items found</h2>
        )}
      </div>
    </div>
  );
};

export default ShopPageItemContainer;
