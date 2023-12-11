import { Count, IconText } from "@/components/Elements";
import { DeliveryIcon, GuaranteedIcon } from "@/constants";
import { CartTypes } from "@/types";
import { formatUSD } from "@/utils";

export const CartItemWrapper = ({
  id,
  name,
  currentPrice,
  productImage,
  quantity,
}: CartTypes.CartItem) => {
  return (
    <div className="flex gap-4 rounded-lg shadow-1 p-4">
      <div className="flex-[1]">
        <img
          src={productImage[0].imageURL}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-[3] flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h6>{name}</h6>
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
            {formatUSD(currentPrice)}
          </p>
          <Count
            quantity={quantity}
            productId={id}
          />
        </div>
      </div>
    </div>
  );
};
