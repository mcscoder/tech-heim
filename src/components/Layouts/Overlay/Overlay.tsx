const VARIANTS = {
  full: "top-0",
  header: "top-[100px]",
};

export interface OverlayProps {
  variant?: keyof typeof VARIANTS;
  onCLickClose?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const Overlay = ({
  variant = "full",
  onCLickClose = () => {},
  children,
  className = "",
  ...props
}: OverlayProps) => {
  const handleOnClick = () => {
    onCLickClose();
  };

  return (
    <div
      onClick={handleOnClick}
      className={`fixed ${VARIANTS[variant]} right-0 bottom-0 left-0 z-40 bg-black bg-opacity-60 ${className}`}
      {...props}
    >
      <div
        className="flex"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
