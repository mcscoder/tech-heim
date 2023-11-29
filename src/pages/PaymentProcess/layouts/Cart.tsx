import {
  Button,
  PaymentDetail,
  PaymentProductCard,
  PaymentProductCardProps,
} from "@/components/Elements";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const paymentProductList: PaymentProductCardProps[] = [
  {
    title: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1702252800&Signature=nKfmSa0HtNEGTyrYbNzg1hYE-QxRppNKoGNdU0H4d6HkTTGLV-vNaJIXduxBT30SWoIIa0rJ7GLjm2zUtYPDK2Dl9jbZ5mN7X-VRnBW-PhpKqm2GMzuIRhCN2FDgm5XvCbmkXkp1xkjrKzI4cEyd8dD~LRUkKfdHHelzR2LOaedGPTG~Uijln~gT5iPyAJzlOLUBlQ4rPOndfa2f2BfGhMu4Aj6-cfr8S41WYXLef5HSY-tKNzSW7OAplqo1EwmOH~rU2toCz4iZDhcrlx5Y52cdQOqMp5zBGzGeRSyETEtdyg3V41cYjVMCy2ZeqszhBln5ud~GafZXh~6RhugqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    lastPrice: 1293,
    currentPrice: 433,
    quantity: 1,
  },
  {
    title: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1702252800&Signature=nKfmSa0HtNEGTyrYbNzg1hYE-QxRppNKoGNdU0H4d6HkTTGLV-vNaJIXduxBT30SWoIIa0rJ7GLjm2zUtYPDK2Dl9jbZ5mN7X-VRnBW-PhpKqm2GMzuIRhCN2FDgm5XvCbmkXkp1xkjrKzI4cEyd8dD~LRUkKfdHHelzR2LOaedGPTG~Uijln~gT5iPyAJzlOLUBlQ4rPOndfa2f2BfGhMu4Aj6-cfr8S41WYXLef5HSY-tKNzSW7OAplqo1EwmOH~rU2toCz4iZDhcrlx5Y52cdQOqMp5zBGzGeRSyETEtdyg3V41cYjVMCy2ZeqszhBln5ud~GafZXh~6RhugqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    lastPrice: 1293,
    currentPrice: 433,
    quantity: 1,
  },
  {
    title: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1702252800&Signature=nKfmSa0HtNEGTyrYbNzg1hYE-QxRppNKoGNdU0H4d6HkTTGLV-vNaJIXduxBT30SWoIIa0rJ7GLjm2zUtYPDK2Dl9jbZ5mN7X-VRnBW-PhpKqm2GMzuIRhCN2FDgm5XvCbmkXkp1xkjrKzI4cEyd8dD~LRUkKfdHHelzR2LOaedGPTG~Uijln~gT5iPyAJzlOLUBlQ4rPOndfa2f2BfGhMu4Aj6-cfr8S41WYXLef5HSY-tKNzSW7OAplqo1EwmOH~rU2toCz4iZDhcrlx5Y52cdQOqMp5zBGzGeRSyETEtdyg3V41cYjVMCy2ZeqszhBln5ud~GafZXh~6RhugqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    lastPrice: 1293,
    currentPrice: 433,
    quantity: 1,
  },
];

export const Cart = () => {
  const subtotal = useRef<number>(0);
  const discount = useRef<number>(0);
  const navigate = useNavigate();

  return (
    <section className="flex gap-24 items-start">
      <div className="flex flex-col gap-6 items-start flex-[3]">
        {paymentProductList.map((item, index) => {
          if (item.lastPrice !== undefined) {
            subtotal.current += item.lastPrice * item.quantity;
            discount.current +=
              (item.lastPrice - item.currentPrice) * item.quantity;
          } else {
            subtotal.current = item.currentPrice * item.quantity;
          }
          return (
            <PaymentProductCard
              key={index}
              {...item}
            />
          );
        })}
      </div>
      <div className="flex flex-col p-4 shadow-1 flex-1 gap-4">
        <h4>Payment Details</h4>
        <PaymentDetail
          subtotal={subtotal.current}
          discount={discount.current}
        />
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
