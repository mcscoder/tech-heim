import { ProductAction, ProductState } from "@/redux";
import { createContext } from "react";

export interface ProductContextType {
  productState: ProductState;
  productDispatch: React.Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContextType | null>(null);
