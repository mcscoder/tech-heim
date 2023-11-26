export interface ProductCategoryProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const ProductCategory = ({
  icon,
  label,
  className = "",
  isActive,
  onClick,
  ...props
}: ProductCategoryProps) => {
  const productCategoryClasses = `flex flex-col items-center gap-4 font-body-xl p-2 border-b-2 ${
    isActive
      ? "border-b-Primary"
      : "border-b-transparent hover:border-b-Primary"
  } duration-200 ${className}`;

  return (
    <button
      onClick={onClick}
      className={productCategoryClasses}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};
