import { createContext } from "react";
import { SetURLSearchParams } from "react-router-dom";

export interface ProductContextProps {
  params: URLSearchParams;
  setParams: SetURLSearchParams;
}

export const ProductContext = createContext<ProductContextProps>({
  params: new URLSearchParams(),
  setParams: () => {},
});
