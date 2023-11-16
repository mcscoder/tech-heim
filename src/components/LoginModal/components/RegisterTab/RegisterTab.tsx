interface RegisterTabProps {
  children?: string;
  onClick?: () => void;
  className?: string;
  activeState?: boolean;
}

export const RegisterTab = ({
  children,
  onClick = () => {},
  className = "",
  activeState = false,
  ...props
}: RegisterTabProps) => {
  const registerTabClasses = `inline-flex items-center justify-center py-2
  font-body-xl  border-b-2 border-solid duration-100 ${
    activeState
      ? "text-Primary border-b-Primary hover:text-primary-500 hover:border-b-primary-500"
      : "text-gray-71 border-b-gray-cb hover:text-primary-50 hover:border-b-primary-50"
  } ${className}`;

  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleOnClick}
      className={registerTabClasses}
      {...props}
    >
      {children}
    </button>
  );
};
