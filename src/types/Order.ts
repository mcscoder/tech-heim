import { CartTypes } from ".";

export interface Order {
  id: string;
  createAt: string;
  orderedProduct: CartTypes.CartItem[];
}
