export const apiURL = "http://192.168.1.40:8080";
export const apiEndPoint = {
  users: "/users",
  homeCategories: "/home-categories",
  productSales: "/product-sales",
  productNews: "/product-news",
  productBestSellers: "/product-best-sellers",
  productGroup: "/productGroup",
  product: "/product",
};
export type ApiEndPointTypes = keyof typeof apiEndPoint;
