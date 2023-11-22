export const apiURL = "http://any:3000";
export const apiEndPoint = {
  users: "/users",
  homeCategories: "/home-categories",
  productSales: "/product-sales",
};
export type ApiEndPointTypes = keyof typeof apiEndPoint;
