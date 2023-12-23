import {
  Button,
  PaymentDetail,
  PaymentProductCard,
} from "@/components/Elements";
import { useCartContext } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();

  const { cartItems } = useCartContext();

  return (
    <section className="flex gap-24 items-start">
      <div className="flex flex-col gap-6 flex-[3]">
        {cartItems.map((cartItem, index) => {
          return (
            <PaymentProductCard
              key={index}
              {...cartItem}
            />
          );
        })}
      </div>
      <div className="flex flex-col p-4 shadow-1 flex-1 gap-4">
        <h4>Payment Details</h4>
        <PaymentDetail />
        <Button
          onClick={() => {
            navigate("/payment-process/checkout");
          }}
        >
          Proceed to checkout
        </Button>
      </div>
    </section>
  );
};
