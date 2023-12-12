import { Cart } from "@/components/Cart";
import { Button } from "@/components/Elements";
import { BagIcon } from "@/constants";
import { useCartContext } from "@/hooks";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const CartButtonContext = createContext<React.Dispatch<
  React.SetStateAction<boolean>
> | null>(null);

export const CartButton = () => {
  const [cartActive, setCartActive] = useState<boolean>(false);

  const { cartItems } = useCartContext();

  useEffect(() => setCartActive(false), [useLocation().pathname]);

  const handleCartButton = () => {
    setCartActive(!cartActive);
  };

  return (
    <CartButtonContext.Provider value={setCartActive}>
      <div className="relative">
        <Button
          onClick={handleCartButton}
          variant="onlyIcon"
          startIcon={<BagIcon />}
        />
        {cartItems.length !== 0 && (
          <p className="text-[14px] font-semibold text-white bg-primary-200 h-[22px] w-[22px] text-center rounded-full absolute top-[-5px] right-0 pointer-events-none">
            {cartItems.length}
          </p>
        )}
      </div>
      {cartActive && <Cart />}
    </CartButtonContext.Provider>
  );
};
