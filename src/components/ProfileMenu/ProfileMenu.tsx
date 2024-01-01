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
import { logout } from "@/redux";
import { useNavigate } from "react-router-dom";

export const ProfileMenu = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    authContext?.authDispatch(logout());
    navigate("/");
  };

  return (
    <div className="w-[300px] bg-white shadow-1 border border-solid border-black/5 rounded-b-lg absolute top-full right-0 mt-[1px] p-4">
      <div className="flex flex-col">
        <Subcategory
          to="/account/personal-data"
          startIcon={<UserCircleIcon />}
        >
          {`${authContext?.authState.user?.firstName} ${authContext?.authState.user?.lastName}`}
        </Subcategory>
        <Subcategory
          to="/account/orders"
          startIcon={<CartBagIcon />}
        >
          Orders
        </Subcategory>
        <Subcategory
          to="/account/wish-list"
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
        <Subcategory
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Log out
        </Subcategory>
      </div>
    </div>
  );
};
