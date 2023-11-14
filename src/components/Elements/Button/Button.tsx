import { forwardRef } from "react";

const VARIANTS = {
  fill: "text-white bg-Primary hover:bg-primary-600",
  outlined:
    "text-Primary outline outline-2 outline-Primary hover:text-primary-600 hover:outline-primary-600",
  text: "text-Primary hover:text-primary-600",
  fillSecondary: "text-white bg-Secondary hover:bg-secondary-500",
  outlinedSecondary:
    "text-Secondary outline outline-2 outline-Secondary hover:text-secondary-500 hover:outline-secondary-500",
  textSecondary: "text-Secondary hover:text-secondary-500",
  onlyIcon: "hover:text-Primary hover:bg-black/[.05]",
};

interface IconProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  IconProps & {
    variant?: keyof typeof VARIANTS;
    children?: React.ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { startIcon, endIcon, variant = "fill", children, disabled, ...props },
    ref
  ) {
    const buttonClasses = `inline-flex items-center justify-center gap-2 rounded-lg duration-100 disabled:pointer-events-none disabled:opacity-50 ${
      children ? "font-button-lg py-2 px-4" : "p-2" // 8px vertical and 16px horizontal padding for text-only buttons, or 8px padding for icon-only buttons
    } ${VARIANTS[variant]}`;
    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...(disabled && { disabled })}
        {...props}
      >
        {startIcon && startIcon}
        {children && <span>{children}</span>}
        {endIcon && endIcon}
      </button>
    );
  }
);
