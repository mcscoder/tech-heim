export interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className = "" }: WrapperProps) => {
  const wrapperClasses = `flex flex-col ${className}`;

  return <div className={wrapperClasses}>{children}</div>;
};
