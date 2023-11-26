import { DefaultLayout } from "@/components/Layouts";
import { Blog, Contact, FAQ, Home } from "@/pages";
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
    ],
  },
]);
