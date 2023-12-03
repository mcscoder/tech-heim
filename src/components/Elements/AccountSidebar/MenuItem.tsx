import { NavLink, NavLinkProps } from "react-router-dom";

export type MenuItemProps = NavLinkProps & {
  startIcon: React.ReactNode;
  title: string;
};

export const MenuItem = ({ to, startIcon, title, ...props }: MenuItemProps) => {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        `inline-flex items-center gap-4 px-6 py-5 border-l-2 hover:text-Primary ${
          isActive ? "border-l-Primary text-Primary" : "border-l-transparent"
        }`
      }
    >
      {startIcon}
      <span className="font-body-xl">{title}</span>
    </NavLink>
  );
};
