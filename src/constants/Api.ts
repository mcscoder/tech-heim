export const apiURL =
  "https://43fa-2001-ee0-4b6e-cf80-414e-301c-410-d1bd.ngrok-free.app";
export const apiEndPoint = {
  users: "/users",
  homeCategories: "/home-categories",
  productSales: "/product-sales",
  productNews: "/product-news",
  productBestSellers: "/product-best-sellers",
  productGroup: "/productGroup",
};
export type ApiEndPointTypes = keyof typeof apiEndPoint;
