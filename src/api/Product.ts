import { getRequest } from ".";

export const getProductGroup = (query: string) => {
  return getRequest("productGroup", query);
};

export const getProduct = (query: string) => {
  return getRequest("product", query);
};
