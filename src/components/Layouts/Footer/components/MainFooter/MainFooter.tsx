interface MainFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const MainFooter = ({ children, className = "" }: MainFooterProps) => {
  const mainFooterClasses = `bg-primary-700 py-12 ${className}`;
  return <div className={mainFooterClasses}>{children}</div>;
};
