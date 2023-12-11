import { Button, OrderSummaryCard, PaymentDetail } from "@/components/Elements";
import { useCartContext } from "@/hooks";
import { useNavigate } from "react-router-dom";

interface CommonLayoutProps {
  children: React.ReactNode;
  returnTitle: string;
  returnPath: string;
  forwardTitle: string;
  forwardAction: () => void;
}

export const CommonLayout = ({
  children,
  returnPath,
  returnTitle,
  forwardAction,
  forwardTitle,
}: CommonLayoutProps) => {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();
  return (
    <section className="flex gap-6 items-start">
      <div className="flex flex-col flex-[2]">
        <div className="flex flex-col gap-8 px-8 py-6 border rounded-lg">
          {children}
        </div>
        <Button
          className="w-fit"
          variant={"text"}
          onClick={() => navigate(returnPath)}
        >
          {returnTitle}
        </Button>
      </div>
      <div className="flex flex-col gap-4 border rounded-lg p-6 flex-[1]">
        <h4>Your Order</h4>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {cartItems.map((item, index) => {
              return (
                <OrderSummaryCard
                  {...item}
                  key={index}
                />
              );
            })}
          </div>
          <PaymentDetail />
          <Button onClick={forwardAction}>{forwardTitle}</Button>
        </div>
      </div>
    </section>
  );
};
