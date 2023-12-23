import { ProductTypes } from ".";

export type CartItem = Pick<
  ProductTypes.Product,
  "id" | "name" | "currentPrice" | "lastPrice" | "productImage"
> & {
  quantity: number;
};
