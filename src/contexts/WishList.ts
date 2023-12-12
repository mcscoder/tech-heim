import { ProductTypes } from "@/types";
import { createContext } from "react";

export interface WishListContext {
  wishList: ProductTypes.ProductCardResponseType[];
  setWishList: React.Dispatch<
    React.SetStateAction<ProductTypes.ProductCardResponseType[]>
  >;
}

export const WishListContext = createContext<WishListContext | null>(null);
