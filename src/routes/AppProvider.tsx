import { RouterProvider } from "react-router-dom";
import { appRouter } from ".";

export const AppProvider = () => {
  return <RouterProvider router={appRouter} />;
};
