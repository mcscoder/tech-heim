interface IconTextProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const IconText = ({
  startIcon,
  endIcon,
  children,
  className = "",
}: IconTextProps) => {
  const iconTextClasses = `inline-flex items-center gap-1 ${className}`;

  return (
    <p className={iconTextClasses}>
      {startIcon && startIcon}
      {children && <span>{children}</span>}
      {endIcon && endIcon}
    </p>
  );
};
