import { GiftIcon, SecuritySafeIcon, UserIcon } from "@/constants";
import { MenuItem } from ".";

export const AccountSideMenu = () => {
  return (
    <section className="flex flex-col bg-gray-f9f rounded-lg">
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
    </section>
  );
};
