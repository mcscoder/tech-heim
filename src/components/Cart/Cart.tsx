import {
  CartItemWrapper,
  CartSummary,
  CartWrapper,
  ItemWrapper,
  TotalItemCount,
} from "./components";

export const Cart = () => {
  return (
    <div className="w-[520px] bg-white shadow-1 border border-solid border-black/5 rounded-b-lg absolute top-full right-0 mt-[1px]">
      <CartWrapper>
        <TotalItemCount quantity={3} />
        <ItemWrapper>
          <CartItemWrapper
            imageURL="https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1702252800&Signature=nKfmSa0HtNEGTyrYbNzg1hYE-QxRppNKoGNdU0H4d6HkTTGLV-vNaJIXduxBT30SWoIIa0rJ7GLjm2zUtYPDK2Dl9jbZ5mN7X-VRnBW-PhpKqm2GMzuIRhCN2FDgm5XvCbmkXkp1xkjrKzI4cEyd8dD~LRUkKfdHHelzR2LOaedGPTG~Uijln~gT5iPyAJzlOLUBlQ4rPOndfa2f2BfGhMu4Aj6-cfr8S41WYXLef5HSY-tKNzSW7OAplqo1EwmOH~rU2toCz4iZDhcrlx5Y52cdQOqMp5zBGzGeRSyETEtdyg3V41cYjVMCy2ZeqszhBln5ud~GafZXh~6RhugqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch"
            currentPrice={433}
          />
          <CartItemWrapper
            imageURL="https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1702252800&Signature=nKfmSa0HtNEGTyrYbNzg1hYE-QxRppNKoGNdU0H4d6HkTTGLV-vNaJIXduxBT30SWoIIa0rJ7GLjm2zUtYPDK2Dl9jbZ5mN7X-VRnBW-PhpKqm2GMzuIRhCN2FDgm5XvCbmkXkp1xkjrKzI4cEyd8dD~LRUkKfdHHelzR2LOaedGPTG~Uijln~gT5iPyAJzlOLUBlQ4rPOndfa2f2BfGhMu4Aj6-cfr8S41WYXLef5HSY-tKNzSW7OAplqo1EwmOH~rU2toCz4iZDhcrlx5Y52cdQOqMp5zBGzGeRSyETEtdyg3V41cYjVMCy2ZeqszhBln5ud~GafZXh~6RhugqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch"
            currentPrice={433}
          />
          <CartItemWrapper
            imageURL="https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1702252800&Signature=nKfmSa0HtNEGTyrYbNzg1hYE-QxRppNKoGNdU0H4d6HkTTGLV-vNaJIXduxBT30SWoIIa0rJ7GLjm2zUtYPDK2Dl9jbZ5mN7X-VRnBW-PhpKqm2GMzuIRhCN2FDgm5XvCbmkXkp1xkjrKzI4cEyd8dD~LRUkKfdHHelzR2LOaedGPTG~Uijln~gT5iPyAJzlOLUBlQ4rPOndfa2f2BfGhMu4Aj6-cfr8S41WYXLef5HSY-tKNzSW7OAplqo1EwmOH~rU2toCz4iZDhcrlx5Y52cdQOqMp5zBGzGeRSyETEtdyg3V41cYjVMCy2ZeqszhBln5ud~GafZXh~6RhugqCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch"
            currentPrice={433}
          />
        </ItemWrapper>
        <CartSummary />
      </CartWrapper>
    </div>
  );
};
