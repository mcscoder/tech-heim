import {
  CartBagIcon,
  DollarCircleIcon,
  HeartIcon,
  LogoutIcon,
  UserCircleIcon,
} from "@/constants";
import { Subcategory } from "../Elements";
import { useContext } from "react";
import { AuthContext } from "@/contexts";

export const ProfileMenu = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="w-[300px] bg-white shadow-1 border border-solid border-black/5 rounded-b-lg absolute top-full right-0 mt-[1px] p-4">
      <div className="flex flex-col">
        <Subcategory
          to="#"
          startIcon={<UserCircleIcon />}
        >
          {authContext?.authState.user?.fullName}
        </Subcategory>
        <Subcategory
          to="#"
          startIcon={<CartBagIcon />}
        >
          Orders
        </Subcategory>
        <Subcategory
          to="#"
          startIcon={<HeartIcon />}
        >
          Wish List
        </Subcategory>
        <Subcategory
          to="#"
          startIcon={<DollarCircleIcon />}
        >
          Payments
        </Subcategory>
        <Subcategory startIcon={<LogoutIcon />}>Log out</Subcategory>
      </div>
    </div>
  );
};
