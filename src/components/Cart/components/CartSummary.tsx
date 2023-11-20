import { Button } from "@/components/Elements";
import { CartIcon } from "@/constants";

export const CartSummary = () => {
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
        >
          Proceed to Cart
        </Button>
      </div>
    </div>
  );
};
