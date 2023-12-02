import { getRequest } from ".";

export const getProductGroup = (query: string) => {
  return getRequest("productGroup", query);
};
