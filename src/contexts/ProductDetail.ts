import { ProductTypes } from "@/types";
import { createContext } from "react";

export interface ProductDetailContextType {
  productDetail: ProductTypes.Product;
  setProductDetail: React.Dispatch<React.SetStateAction<ProductTypes.Product>>;
}

export const ProductDetailContext =
  createContext<ProductDetailContextType | null>(null);
