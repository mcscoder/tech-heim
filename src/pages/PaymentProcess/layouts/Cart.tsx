import {
  PaymentProductCard,
  PaymentProductCardProps,
} from "@/components/Elements";

const paymentProductList: PaymentProductCardProps[] = [
  {
    title: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1702252800&Signature=nKfmSa0HtNEGTyrYbNzg1hYE-QxRppNKoGNdU0H4d6HkTTGLV-vNaJIXduxBT30SWoIIa0rJ7GLjm2zUtYPDK2Dl9jbZ5mN7X-VRnBW-PhpKqm2GMzuIRhCN2FDgm5XvCbmkXkp1xkjrKzI4cEyd8dD~LRUkKfdHHelzR2LOaedGPTG~Uijln~gT5iPyAJzlOLUBlQ4rPOndfa2f2BfGhMu4Aj6-cfr8S41WYXLef5HSY-tKNzSW7OAplqo1EwmOH~rU2toCz4iZDhcrlx5Y52cdQOqMp5zBGzGeRSyETEtdyg3V41cYjVMCy2ZeqszhBln5ud~GafZXh~6RhugqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    lastPrice: 1293,
    currentPrice: 433,
  },
  {
    title: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1702252800&Signature=nKfmSa0HtNEGTyrYbNzg1hYE-QxRppNKoGNdU0H4d6HkTTGLV-vNaJIXduxBT30SWoIIa0rJ7GLjm2zUtYPDK2Dl9jbZ5mN7X-VRnBW-PhpKqm2GMzuIRhCN2FDgm5XvCbmkXkp1xkjrKzI4cEyd8dD~LRUkKfdHHelzR2LOaedGPTG~Uijln~gT5iPyAJzlOLUBlQ4rPOndfa2f2BfGhMu4Aj6-cfr8S41WYXLef5HSY-tKNzSW7OAplqo1EwmOH~rU2toCz4iZDhcrlx5Y52cdQOqMp5zBGzGeRSyETEtdyg3V41cYjVMCy2ZeqszhBln5ud~GafZXh~6RhugqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    lastPrice: 1293,
    currentPrice: 433,
  },
  {
    title: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1702252800&Signature=nKfmSa0HtNEGTyrYbNzg1hYE-QxRppNKoGNdU0H4d6HkTTGLV-vNaJIXduxBT30SWoIIa0rJ7GLjm2zUtYPDK2Dl9jbZ5mN7X-VRnBW-PhpKqm2GMzuIRhCN2FDgm5XvCbmkXkp1xkjrKzI4cEyd8dD~LRUkKfdHHelzR2LOaedGPTG~Uijln~gT5iPyAJzlOLUBlQ4rPOndfa2f2BfGhMu4Aj6-cfr8S41WYXLef5HSY-tKNzSW7OAplqo1EwmOH~rU2toCz4iZDhcrlx5Y52cdQOqMp5zBGzGeRSyETEtdyg3V41cYjVMCy2ZeqszhBln5ud~GafZXh~6RhugqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    lastPrice: 1293,
    currentPrice: 433,
  },
];

export const Cart = () => {
  return (
    <section className="flex">
      <div className="flex flex-col gap-6 items-start">
        {paymentProductList.map((item, index) => {
          return (
            <PaymentProductCard
              key={index}
              {...item}
            />
          );
        })}
      </div>
    </section>
  );
};
