import { useCartContext } from "@/hooks";
import { formatUSD, getTotalCartPrice } from "@/utils";

export const PaymentDetail = () => {
  const { cartItems } = useCartContext();
  const { totalCurrentPrice, totalLastPrice } = getTotalCartPrice(cartItems);

  return (
    <section className="flex flex-col gap-2 p-2">
      <div className="flex items-center justify-between">
        <p className="font-body-sm text-gray-71">Subtotal</p>
        <p className="font-body-sm text-gray-44">
          {formatUSD(totalLastPrice as number)}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-body-sm text-gray-71">Discount</p>
        <p className="font-body-sm text-gray-44">
          {formatUSD(totalCurrentPrice - (totalLastPrice as number))}
        </p>
      </div>
      <div className="h-[2px] bg-gray-cb"></div>
      <div className="flex items-center justify-between text-gray-d2d">
        <h6>GrandTotal</h6>
        <h6>{formatUSD(totalCurrentPrice)}</h6>
      </div>
    </section>
  );
};
