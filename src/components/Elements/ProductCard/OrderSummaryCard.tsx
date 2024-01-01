import { CartTypes } from "@/types";
import { formatUSD } from "@/utils";

export const OrderSummaryCard = ({
  name,
  currentPrice,
  lastPrice,
  productImage,
  quantity,
}: CartTypes.CartItem) => {
  return (
    <div className="flex items-center p-3 gap-2 border-b">
      <div className="h-[100px]">
        <img
          src={productImage[0].imageURL}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 flex-[3]">
        <p className="font-body-xs text-gray-d2d">{name}</p>
        <p className="font-caption-sm text-gray-71">x{quantity}</p>
        <div className="flex items-center justify-end font-body-xs">
          <p className="text-gray-d2d">
            {formatUSD(currentPrice)}{" "}
            {lastPrice && (
              <span className="text-gray-71">from {formatUSD(lastPrice)}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
