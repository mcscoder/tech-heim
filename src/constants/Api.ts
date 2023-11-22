export const apiURL = "http://any:3000";
export const apiEndPoint = {
  users: "/users",
  homeCategories: "/home-categories",
  productSales: "/product-sales",
  productNews: "/product-news",
  productBestSellers: "/product-best-sellers",
};
export type ApiEndPointTypes = keyof typeof apiEndPoint;
