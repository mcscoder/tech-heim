import { Link, LinkProps } from "react-router-dom";

type SubcategoryProps = Omit<LinkProps, "to"> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    startIcon?: React.ReactNode;
    children?: string;
    to?: string;
  };

export const Subcategory = ({
  startIcon,
  children,
  to,
  ...props
}: SubcategoryProps) => {
  const subcategoryClasses =
    "font-body-lg text-black hover:text-Primary hover:bg-black/5 flex gap-2 p-3 rounded-lg duration-150";

  return (
    <>
      {to ? (
        <Link
          to={to}
          className={subcategoryClasses}
          {...props}
        >
          {startIcon && startIcon}
          <p>{children}</p>
        </Link>
      ) : (
        <button
          className={subcategoryClasses}
          {...props}
        >
          {startIcon && startIcon}
          <p>{children}</p>
        </button>
      )}
    </>
  );
};
