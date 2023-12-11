export const apiURL = "http://25.30.27.67:8080";
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
