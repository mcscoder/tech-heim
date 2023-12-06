import { DefaultLayout } from "@/components/Layouts";
import {
  Account,
  Blog,
  Cart,
  Checkout,
  Contact,
  Discount,
  FAQ,
  Home,
  Payment,
  PaymentProcess,
  PersonalData,
  ProductDetail,
  Security,
  WishList,
} from "@/pages";
import { ProductProvider } from "@/providers";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "product",
        Component: ProductProvider,
      },
      {
        path: "product/:productId",
        Component: ProductDetail,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "faq",
        Component: FAQ,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "payment-process",
        Component: PaymentProcess,
        children: [
          {
            path: "cart",
            Component: Cart,
          },
          {
            path: "checkout",
            Component: Checkout,
          },
          {
            path: "payment",
            Component: Payment,
          },
        ],
      },
      {
        path: "account",
        Component: Account,
        children: [
          {
            path: "personal-data",
            Component: PersonalData,
          },
          {
            path: "security",
            Component: Security,
          },
          {
            path: "discount",
            Component: Discount,
          },
          {
            path: "wish-list",
            Component: WishList,
          },
        ],
      },
    ],
  },
]);
