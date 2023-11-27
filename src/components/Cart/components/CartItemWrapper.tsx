import { Count, IconText } from "@/components/Elements";
import { DeliveryIcon, GuaranteedIcon } from "@/constants";
import { formatUSD } from "@/utils";
import { useState } from "react";

export interface CartItemWrapperProps {
  title: string;
  imageURL: string;
  currentPrice: number;
}

export const CartItemWrapper = ({
  title,
  imageURL,
  currentPrice,
}: CartItemWrapperProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex gap-4 rounded-lg shadow-1 p-4">
      <div className="flex-[2]">
        <img
          src={imageURL}
          alt=""
        />
      </div>
      <div className="flex-[3] flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h6>{title}</h6>
          <div className="flex flex-col">
            <p className="font-caption-sm text-gray-71">x{quantity}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <IconText
            className="font-caption-sm text-gray-71"
            startIcon={<DeliveryIcon />}
          >
            Free Delivery
          </IconText>
          <IconText
            className="font-caption-sm text-gray-71"
            startIcon={<GuaranteedIcon />}
          >
            Guaranteed
          </IconText>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-body-md text-gray-d2d">
            {formatUSD(currentPrice * quantity)}
          </p>
          <Count
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>
    </div>
  );
};
