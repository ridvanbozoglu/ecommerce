import ProductDetailPage from "../pages/root/autlet/ProductDetailPage";

const productDetailRoute = {
  path: "/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId",
  element: ProductDetailPage,
  exact: true
};

export default productDetailRoute;
