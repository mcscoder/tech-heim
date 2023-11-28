import { Cart } from "@/components/Cart";
import { Button } from "@/components/Elements";
import { BagIcon } from "@/constants";
import { createContext, useState } from "react";

export const CartButtonContext = createContext<React.Dispatch<
  React.SetStateAction<boolean>
> | null>(null);

export const CartButton = () => {
  const [cartActive, setCartActive] = useState<boolean>(false);

  const handleCartButton = () => {
    setCartActive(!cartActive);
  };

  return (
    <CartButtonContext.Provider value={setCartActive}>
      <Button
        onClick={handleCartButton}
        variant="onlyIcon"
        startIcon={<BagIcon />}
      />
      {cartActive && <Cart />}
    </CartButtonContext.Provider>
  );
};
