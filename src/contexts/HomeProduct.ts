import { ProductTypes } from "@/types";
import { createContext } from "react";

export interface HomeProductContextType {
  products: ProductTypes.ProductCardResponseType[];
  setProducts: React.Dispatch<
    React.SetStateAction<ProductTypes.ProductCardResponseType>
  >;
}

export const HomeProductContext = createContext<HomeProductContextType | null>(
  null
);
