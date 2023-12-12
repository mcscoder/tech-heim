import {
  CartItemWrapper,
  CartSummary,
  CartWrapper,
  ItemWrapper,
  TotalItemCount,
} from "./components";
import { useCartContext } from "@/hooks";

export const Cart = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="w-[600px] bg-white shadow-1 border border-solid border-black/5 rounded-b-lg absolute top-full right-0 mt-[1px]">
      {cartItems !== null ? (
        <CartWrapper>
          <TotalItemCount quantity={cartItems.length} />
          {cartItems.length !== 0 && (
            <>
              <ItemWrapper>
                {cartItems.map((cartItem, index) => {
                  return (
                    <CartItemWrapper
                      key={index}
                      {...cartItem}
                    />
                  );
                })}
              </ItemWrapper>
              <CartSummary cartItems={cartItems} />
            </>
          )}
        </CartWrapper>
      ) : (
        <></>
      )}
    </div>
  );
};
