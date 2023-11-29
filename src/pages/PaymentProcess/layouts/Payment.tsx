import { Method, MethodOptionObject } from "@/components/Elements";
import { CommonLayout } from "..";
import { PaypalLogo, ShopeePayLogo } from "@/constants";

const methodOptions: MethodOptionObject[] = [
  {
    title: "Cash",
  },
  {
    title: "Credit card",
  },
  {
    title: "Debit card",
  },
  {
    title: <PaypalLogo />,
  },
  {
    title: <ShopeePayLogo />,
  },
];

export const Payment = () => {
  return (
    <CommonLayout
      returnPath="/payment-process/checkout"
      returnTitle="Return to checkout"
      forwardAction={() => {}}
      forwardTitle="Confirm"
    >
      <div className="flex flex-col gap-2">
        <h5>Payment</h5>
        <Method methodOptions={methodOptions} />
      </div>
    </CommonLayout>
  );
};
