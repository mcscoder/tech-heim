import { DefaultLayout } from "@/components/Layouts";
import {
  Blog,
  Cart,
  Checkout,
  Contact,
  FAQ,
  Home,
  Payment,
  PaymentProcess,
  ProductDetail,
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
    ],
  },
]);
