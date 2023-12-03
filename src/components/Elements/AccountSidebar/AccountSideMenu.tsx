import { UserIcon } from "@/constants";
import { MenuItem } from ".";

export const AccountSideMenu = () => {
  return (
    <section className="flex flex-col bg-gray-f9f rounded-lg">
      <MenuItem
        to={"/account/personal-data"}
        startIcon={<UserIcon />}
        title="Personal data"
      />
    </section>
  );
};
