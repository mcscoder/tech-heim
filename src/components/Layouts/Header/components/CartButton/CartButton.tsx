import { Cart } from "@/components/Cart";
import { Button } from "@/components/Elements";
import { BagIcon } from "@/constants";
import { useState } from "react";

export const CartButton = () => {
  const [cartActive, setCartActive] = useState<boolean>(false);

  const handleCartButton = () => {
    setCartActive(!cartActive);
  };

  return (
    <>
      <Button
        onClick={handleCartButton}
        variant="onlyIcon"
        startIcon={<BagIcon />}
      />
      {cartActive && <Cart />}
    </>
  );
};
