interface PolicyFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const PolicyFooter = ({
  children,
  className = "",
  ...props
}: PolicyFooterProps) => {
  const policyFooterClasses = `bg-primary-900 py-4 ${className}`;
  return (
    <div
      className={policyFooterClasses}
      {...props}
    >
      {children}
    </div>
  );
};
