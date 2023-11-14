import { Outlet } from "react-router";
import { Header } from "..";
import { Footer } from "../Footer";

export const DefaultLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
