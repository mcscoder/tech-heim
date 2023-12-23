import { CartTypes } from "@/types";
import { createContext } from "react";

export interface CartContextType {
  cartItems: CartTypes.CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartTypes.CartItem[]>>;
}

export const CartContext = createContext<CartContextType | null>(null);
