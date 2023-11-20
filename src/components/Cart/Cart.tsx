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
          <CartItemWrapper />
          <CartItemWrapper />
          <CartItemWrapper />
        </ItemWrapper>
        <CartSummary />
      </CartWrapper>
    </div>
  );
};
