import { ProductTypes } from "@/types";

export const paramKeyValuePair = (
  key: ProductTypes.SearchParamKeys,
  value: string
) => {
  // computed property name
  return { [key]: value };
};

export const getParamValue = (
  params: URLSearchParams,
  key: ProductTypes.SearchParamKeys
) => {
  return params.get(key);
};

export const getParams = (
  params: URLSearchParams
): ProductTypes.SearchParamTypes => {
  const categoryId = getParamValue(params, "categoryId");
  const productTypeId = getParamValue(params, "productTypeId");
  const sort = getParamValue(params, "sort");

  return {
    ...(categoryId && { categoryId: categoryId }),
    ...(productTypeId && { productTypeId: productTypeId }),
    ...((sort === "ascending" || sort === "descending") && { sort: sort }),
  };
};

export const categoryId = (
  params: URLSearchParams,
  value: string
): ProductTypes.SearchParamTypes => {
  const currentParams: ProductTypes.SearchParamTypes = getParams(params);
  return {
    ...currentParams,
    categoryId: value,
  };
};

export const productTypeId = (
  params: URLSearchParams,
  value: string
): ProductTypes.SearchParamTypes => {
  const currentParams: ProductTypes.SearchParamTypes = getParams(params);
  return {
    ...currentParams,
    productTypeId: value,
  };
};

export const sort = (
  params: URLSearchParams,
  value: ProductTypes.SortTypes
): ProductTypes.SearchParamTypes => {
  const currentParams: ProductTypes.SearchParamTypes = getParams(params);
  return {
    ...currentParams,
    sort: value,
  };
};
