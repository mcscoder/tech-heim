import {
  Link as ReactLink,
  LinkProps as ReactLinkProps,
} from "react-router-dom";

interface IconProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

type LinkProps = Omit<ReactLinkProps, "to"> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  IconProps & {
    children?: React.ReactNode;
    to?: string;
  };

export const Link = ({
  startIcon,
  endIcon,
  children,
  to,
  href,
  className = "",
  ...props
}: LinkProps) => {
  const Comp = to ? ReactLink : "a";
  const linkClasses = `inline-flex items-center ${className} ${
    children && "gap-1"
  }`;

  return (
    <Comp
      to={to || "#"}
      href={href || "#"}
      className={linkClasses}
      {...props}
    >
      {startIcon && startIcon}
      {children && <span>{children}</span>}
      {endIcon && endIcon}
    </Comp>
  );
};
