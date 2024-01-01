import { OrderSummaryCard } from "@/components/Elements";
import { OrderTypes } from "@/types";
import { dateConversion, formatUSD, getTotalCartPrice } from "@/utils";

export const OrderDetailed = ({
  id,
  createAt,
  orderedProduct,
}: OrderTypes.Order) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Order code</h6>
        <p className="flex-1 font-body-md">{id}</p>
      </div>
      <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Placed on</h6>
        <p className="flex-1 font-body-md">{dateConversion(createAt)}</p>
      </div>
      {/* <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Sent to</h6>
        <p className="flex-1 font-body-md">31,Albuquerque,New York</p>
      </div> */}
      <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Payment type </h6>
        <p className="flex-1 font-body-md">Cash</p>
      </div>
      <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Total</h6>
        <p className="flex-1 font-body-md">
          {formatUSD(getTotalCartPrice(orderedProduct).totalCurrentPrice)}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {orderedProduct &&
          orderedProduct.map((item, index) => {
            return (
              <OrderSummaryCard
                key={index}
                {...item}
              />
            );
          })}
      </div>
    </div>
  );
};
