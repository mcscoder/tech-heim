import { Outlet, useLocation } from "react-router";
import { Header } from "..";
import { Footer } from "../Footer";
import { useEffect } from "react";

export const DefaultLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

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
