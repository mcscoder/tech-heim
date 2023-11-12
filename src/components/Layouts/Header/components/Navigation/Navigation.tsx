interface NavigationProps {
  children: React.ReactNode;
  className?: string;
}

export const Navigation = ({ children, className = "" }: NavigationProps) => {
  const navigationClasses = `flex items-center justify-center gap-x-12 ${className}`;
  return <ul className={navigationClasses}>{children}</ul>;
};
