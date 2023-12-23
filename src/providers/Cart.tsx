import { AuthContext, CartContext } from "@/contexts";
import { useCartContext } from "@/hooks";
import { CartTypes } from "@/types";
import { useContext, useEffect, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

const InitialCartState = ({ children }: CartProviderProps) => {
  const authContext = useContext(AuthContext);
  const { getCart } = useCartContext();

  useEffect(() => {
    if (authContext.authState.login.ok) {
      getCart();
    }
  }, [authContext.authState.login.ok]);

  return children;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartTypes.CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <InitialCartState>{children}</InitialCartState>
    </CartContext.Provider>
  );
};
