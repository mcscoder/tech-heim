interface ProductGridWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const ProductGridWrapper = ({
  children,
  className = "",
}: ProductGridWrapperProps) => {
  const productGridWrapperClasses = `product-grid-wrapper ${className}`;

  return <div className={productGridWrapperClasses}>{children}</div>;
};
