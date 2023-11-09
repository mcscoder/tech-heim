import { DefaultLayout } from "@/components/Layouts";
import { Home } from "@/pages";
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
    ],
  },
]);
