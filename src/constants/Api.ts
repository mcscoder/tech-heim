export const apiURL = "https://8c75-116-98-98-130.ngrok-free.app";
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
