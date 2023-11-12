import { Outlet } from "react-router";
import { Header } from "..";
import { Footer } from "../Footer";

export const DefaultLayout = () => {
  return (
    <div className="global-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
