import ShopPage from "../pages/root/autlet/ShopPage";

const shopPage = {
    path: "/shop/:gender?/:categoryName?/:categoryId?",
    element: ShopPage,
    exact : false
}

export default shopPage;