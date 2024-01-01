import { ArrowRightIcon } from "@/constants";
import { Link } from "..";
import { OrderTypes } from "@/types";
import { dateConversion, formatUSD, getTotalCartPrice } from "@/utils";

export const OrderCard = ({
  id,
  createAt,
  orderedProduct,
  index,
}: OrderTypes.Order & { index: number }) => {
  return (
    <div className="grid grid-cols-4 bg-gray-f9f p-4">
      <div className="flex flex-col items-center justify-center gap-6">
        <h6>Order code</h6>
        <p className="font-body-lg">{id}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h6>Placed on</h6>
        <p className="font-body-lg">{dateConversion(createAt)}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h6>Total</h6>
        <p className="font-body-lg">
          {formatUSD(getTotalCartPrice(orderedProduct).totalCurrentPrice)}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Link
          endIcon={
            <ArrowRightIcon
              height={14}
              width={14}
            />
          }
          className="text-Primary hover:text-primary-400"
          to={`/account/orders/${index}`}
        >
          Order details
        </Link>
      </div>
    </div>
  );
};
