import {
  BagIcon,
  GiftIcon,
  HeartIcon,
  SecuritySafeIcon,
  UserIcon,
} from "@/constants";
import { MenuItem } from ".";

export const AccountSideMenu = () => {
  return (
    <section className="flex flex-col bg-gray-f9f rounded-lg min-w-[300px]">
      <MenuItem
        to={"/account/personal-data"}
        startIcon={<UserIcon />}
        title="Personal data"
      />
      <MenuItem
        to={"/account/security"}
        startIcon={<SecuritySafeIcon />}
        title="Security & access"
      />
      <MenuItem
        to={"/account/discount"}
        startIcon={<GiftIcon />}
        title="Discounts"
      />
      <MenuItem
        to={"/account/wish-list"}
        startIcon={<HeartIcon />}
        title="Wish list"
      />
      <MenuItem
        to={"/account/orders"}
        startIcon={<BagIcon />}
        title="Orders"
      />
    </section>
  );
};
