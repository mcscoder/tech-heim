import { NavigationLinkObject } from "@/constants";
import { NavLink } from "react-router-dom";

interface NavigationItemsProps {
  navigationLink: NavigationLinkObject;
}

export const NavigationItem = ({ navigationLink }: NavigationItemsProps) => {
  return (
    <li className={"inline-flex items-center justify-center p-2"}>
      <NavLink
        to={navigationLink.path}
        className={({ isActive }) =>
          `font-body-lg p-2 border-b ${
            isActive
              ? "text-Primary border-Primary"
              : "text-black border-transparent hover:text-primary-100 hover:border-primary-100"
          }`
        }
      >
        {navigationLink.label}
      </NavLink>
    </li>
  );
};
