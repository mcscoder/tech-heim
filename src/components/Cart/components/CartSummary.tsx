import { Button } from "@/components/Elements";
import { CartButtonContext } from "@/components/Layouts/Header/components";
import { CartIcon } from "@/constants";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const CartSummary = () => {
  const navigate = useNavigate();

  const cartButtonContext = useContext(CartButtonContext)!;

  return (
    <div className="flex px-6 pt-2 gap-8">
      <div className="flex flex-col items-center">
        <p className="font-body-sm text-gray-d2d">Grand total</p>
        <h6>$543.02</h6>
      </div>
      <div className="flex-1 flex">
        <Button
          className="w-full"
          endIcon={<CartIcon />}
          onClick={() => {
            navigate("/payment-process/cart");
            cartButtonContext(false);
          }}
        >
          Proceed to Cart
        </Button>
      </div>
    </div>
  );
};
