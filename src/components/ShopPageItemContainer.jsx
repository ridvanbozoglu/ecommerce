import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnScreen from "../hooks/useOnScreen";
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
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  const total = useSelector((state) => state.product.total);
  const isLoading = useSelector((state) => state.product.isLoading);
  const productList = useSelector((state) => state.product.productList);

  const searchParams = new URLSearchParams(location.search);
  const order = searchParams.get("order") || "price:asc";
  const filter = searchParams.get("filter") || "";

  const { measureRef, isIntersecting } = useOnScreen();

  // Urunlerin sayısını kontrol eder
  useEffect(() => {
    if (productList.length === total) {
      setHasNext(false);
    } else {
      setHasNext(true);
    }
  }, [productList]);

  // İnfinite scroll kontrolü
  useEffect(() => {
    if (isIntersecting && hasNext && !isLoading) {
      setOffset((prevOffset) => prevOffset + 16); // Her seferde 16 ürün
    }
  }, [isIntersecting]);

  // İlk yükleme ve parametre değişikliği durumunda listeyi temizler
  useEffect(() => {
    dispatch(setProductList([]));
    setOffset(0);
    dispatch(
      productsThunk({
        categoryId: params.categoryId,
        offset,
        order,
        filter,
      })
    );
  }, [params.categoryId, order, filter]);

  // Ürünleri getirir
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(
        productsThunk({
          categoryId: params.categoryId,
          offset,
          order,
          filter,
        })
      );
    };

    if (hasNext && !isLoading && isIntersecting) {
      fetchProducts();
    }
  }, [dispatch, offset, params, order, filter]);

  return (
    <div className="w-full flex flex-col items-center justify-center my-[48px] px-[30px]">
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-[30px] justify-between w-[80%]">
        {productList.length > 0 ? (
          productList.map((item, index) => (
            <ShopPageItemCard
              key={index}
              item={item}
              categoryName={params.categoryName}
              gender={params.gender}
            />
          ))
        ) : total > 0 ? (
          <Spinner />
        ) : (
          <h2>No items found</h2>
        )}
      </div>

      {/* Infinite scroll ölçüm divi */}
      <div ref={measureRef} className="h-[20px] w-full bg-black"></div>

      {isLoading && <Spinner />}
    </div>
  );
};

export default ShopPageItemContainer;
