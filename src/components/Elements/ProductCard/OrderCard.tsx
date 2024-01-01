import { ArrowRightIcon } from "@/constants";
import { Link } from "..";

export const OrderCard = () => {
  return (
    <div className="grid grid-cols-4 bg-gray-f9f p-4">
      <div className="flex flex-col items-center justify-center gap-6">
        <h6>Order code</h6>
        <p className="font-body-lg">#1050486</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h6>Placed on</h6>
        <p className="font-body-lg">2023/04/15</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h6>Total</h6>
        <p className="font-body-lg">$543.02</p>
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
        >
          Order status
        </Link>
      </div>
    </div>
  );
};
