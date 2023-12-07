export const apiURL = "https://eb68-14-191-112-211.ngrok-free.app";
export const apiEndPoint = {
  users: "/users",
  homeCategories: "/home-categories",
  productSales: "/product-sales",
  productNews: "/product-news",
  productBestSellers: "/product-best-sellers",
  productGroup: "/productGroup",
  product: "/product",
  user: "/user",
  login: "/user/login",
  signup: "/user/signup",
  cart: "/user/cart",
};
export type ApiEndPointTypes = keyof typeof apiEndPoint;
