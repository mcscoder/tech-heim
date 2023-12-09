import { ProductTypes } from "@/types";

export enum ProductActionTypes {
  SELECT_CATEGORY,
  SELECT_TYPE,
}

export type ProductAction =
  | {
      type: ProductActionTypes.SELECT_CATEGORY;
      payload: {
        productGroups: ProductTypes.ProductGroup[];
      };
    }
  | {
      type: ProductActionTypes.SELECT_TYPE;
      payload: {
        products: ProductTypes.ProductCardResponseType[];
      };
    };

export const selectCategory = (
  productGroups: ProductTypes.ProductGroup[]
): ProductAction => {
  return {
    type: ProductActionTypes.SELECT_CATEGORY,
    payload: {
      productGroups,
    },
  };
};

export const selectType = (
  products: ProductTypes.ProductCardResponseType[]
): ProductAction => {
  return {
    type: ProductActionTypes.SELECT_TYPE,
    payload: {
      products,
    },
  };
};
