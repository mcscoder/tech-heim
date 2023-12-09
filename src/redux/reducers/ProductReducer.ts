import { ProductTypes } from "@/types";
import { ProductAction, ProductActionTypes } from "..";

export interface ProductState {
  products: ProductTypes.ProductCardResponseType[] | null;
  productGroups: ProductTypes.ProductGroup[] | null;
}

export const initialProductState: ProductState = {
  products: null,
  productGroups: null,
};

export const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.SELECT_CATEGORY: {
      const { productGroups } = action.payload;
      return {
        ...state,
        productGroups,
      };
    }

    case ProductActionTypes.SELECT_TYPE: {
      const { products } = action.payload;
      return {
        ...state,
        products,
      };
    }

    default:
      return state;
  }
};
