import { DeliveryIcon, GuaranteedIcon } from "@/constants";
import { Count, IconText } from "..";
import { formatUSD } from "@/utils";
import { CartTypes } from "@/types";

export interface PaymentProductCardProps {
  title: string;
  imageURL: string;
  lastPrice: number | undefined;
  currentPrice: number;
  quantity: number;
}

export const PaymentProductCard = ({
  id,
  name,
  currentPrice,
  lastPrice,
  productImage,
  quantity,
}: CartTypes.CartItem) => {
  return (
    <div className="flex items-center gap-6 px-4 py-2 shadow-1">
      <div className="flex-1">
        <img
          src={productImage[0].imageURL}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 flex-[5]">
        <h6>{name}</h6>
        <div className="flex flex-col gap-2">
          <IconText
            startIcon={<DeliveryIcon />}
            className="font-caption-sm"
          >
            Free delivery
          </IconText>
          <IconText
            startIcon={<GuaranteedIcon />}
            className="font-caption-sm"
          >
            Guaranteed
          </IconText>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {lastPrice && (
              <p className="text-gray-71 line-through">
                {formatUSD(lastPrice)}
              </p>
            )}
            <p className="font-body-lg">{formatUSD(currentPrice)}</p>
          </div>
          <Count
            quantity={quantity}
            productId={id}
          />
        </div>
      </div>
    </div>
  );
};
