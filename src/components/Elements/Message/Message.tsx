const VARIANTS = {
  success: "text-success",
  error: "text-error",
  info: "text-Primary",
};

interface MessageProps {
  variant: keyof typeof VARIANTS;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: string;
  className?: string;
}

export interface MessageType {
  message: string;
}

export const Message = ({
  variant,
  startIcon,
  endIcon,
  children,
  className = "",
  ...props
}: MessageProps) => {
  const messageClasses = `inline-flex items-center justify-center gap-2 ${VARIANTS[variant]} ${className}`;

  return (
    <p
      className={messageClasses}
      {...props}
    >
      {startIcon && startIcon}
      {children && <span>{children}</span>}
      {endIcon && endIcon}
    </p>
  );
};
