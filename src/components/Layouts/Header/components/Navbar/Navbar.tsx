interface NavBarProps {
  children: React.ReactNode;
  className?: string;
}

// Navigation links will be placed here, inside of <nav> tag
export const Navbar = ({ children, className = "" }: NavBarProps) => {
  return <nav className={className}>{children}</nav>;
};
