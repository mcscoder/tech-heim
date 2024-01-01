import { Method, MethodOptionObject } from "@/components/Elements";
import { CommonLayout } from "..";
import { PaypalLogo, ShopeePayLogo } from "@/constants";
import { useNavigate } from "react-router";
import axios from "axios";
import { getRequestURL, getToken } from "@/utils";

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
  const navigate = useNavigate();
  const handleAddToOrder = async () => {
    await axios.get(getRequestURL("addToOrder"), {
      headers: {
        token: getToken().token,
      },
    });
    navigate("/");
    location.reload();
  };

  return (
    <CommonLayout
      returnPath="/payment-process/checkout"
      returnTitle="Return to checkout"
      forwardAction={handleAddToOrder}
      forwardTitle="Confirm"
    >
      <div className="flex flex-col gap-2">
        <h5>Payment</h5>
        <Method methodOptions={methodOptions} />
      </div>
    </CommonLayout>
  );
};
