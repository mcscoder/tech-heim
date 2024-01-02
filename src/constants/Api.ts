// export const apiURL = "http://172.20.10.3:8080";
// export const apiURL = "http://25.30.27.67:8080";
export const apiURL = "http://192.168.137.1:8080";
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
  code: "/user/code",
  newPassword: "/user/new-password",
  wishlist: "/user/wishlist",
  comment: "/product/comment",
  homeProduct: "/home/product",
  order: "/order",
  addToOrder: "/order/add-to-order",
  updateUsername: "/user/name",
  updatePhoneNumber: "/user/phone",
  updateAddress: "/user/address",
};
export type ApiEndPointTypes = keyof typeof apiEndPoint;
