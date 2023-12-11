import { CartTypes } from "@/types";

export type PricedProductType = Pick<
  CartTypes.CartItem,
  "currentPrice" | "lastPrice" | "quantity"
>;

export interface TotalProductPriceType {
  totalCurrentPrice: number;
  totalLastPrice: number | null;
}

export const getTotalProductPrice = ({
  quantity,
  currentPrice,
  lastPrice,
}: PricedProductType): TotalProductPriceType => {
  return {
    totalCurrentPrice: quantity * currentPrice,
    totalLastPrice: lastPrice ? lastPrice * quantity : null,
  };
};

export const getTotalCartPrice = (
  pricedProducts: PricedProductType[]
): TotalProductPriceType => {
  let totalCurrentPrice = 0;
  let totalLastPrice = 0;

  for (const product of pricedProducts) {
    totalCurrentPrice += product.currentPrice * product.quantity;
    totalLastPrice +=
      (product.lastPrice || product.currentPrice) * product.quantity;
  }

  return {
    totalCurrentPrice: totalCurrentPrice,
    totalLastPrice: totalLastPrice,
  };
};
