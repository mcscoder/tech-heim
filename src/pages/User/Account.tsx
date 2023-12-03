import { AccountSideMenu } from "@/components/Elements";
import { Outlet } from "react-router-dom";

export const Account = () => {
  return (
    <div className="content-container flex gap-6 my-20">
      <AccountSideMenu />
      <Outlet />
    </div>
  );
};
