import {
  Button,
  OrderSummaryCard,
  OrderSummaryCardProps,
  PaymentDetail,
} from "@/components/Elements";
import { useNavigate } from "react-router-dom";

const productList: OrderSummaryCardProps[] = [
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
            {productList.map((item, index) => {
              return (
                <OrderSummaryCard
                  {...item}
                  key={index}
                />
              );
            })}
          </div>
          <PaymentDetail
            subtotal={2323}
            discount={999}
          />
          <Button onClick={forwardAction}>{forwardTitle}</Button>
        </div>
      </div>
    </section>
  );
};
