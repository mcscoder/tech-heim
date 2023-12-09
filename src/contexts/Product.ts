import { ProductAction, ProductState } from "@/redux";
import { createContext } from "react";

export interface ProductContextProps {
  productState: ProductState;
  productDispatch: React.Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContextProps | null>(null);
