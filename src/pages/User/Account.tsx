import { AccountSideMenu } from "@/components/Elements";
import { Outlet } from "react-router-dom";

export const Account = () => {
  return (
    <div className="content-container flex gap-6 my-20 items-start">
      <AccountSideMenu />
      <Outlet />
    </div>
  );
};
