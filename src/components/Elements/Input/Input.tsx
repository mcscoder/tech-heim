import { forwardRef } from "react";
import { Button } from "..";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputID?: string;
  onDataChange?: (value: string) => void;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  endIconType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onEndIconClick?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    inputID,
    onDataChange = () => {},
    label,
    startIcon,
    endIcon,
    endIconType = "button",
    onEndIconClick = () => {},
    placeholder = "",
    className = "",
    ...props
  },
  ref
) {
  return (
    <div
      className={`group h-fit relative text-gray-b4 focus-within:text-primary-100 ${className}`}
    >
      {label && (
        <label
          htmlFor={inputID}
          className="absolute font-body-xs bg-white left-6 -top-2 px-1"
        >
          {label}
        </label>
      )}
      {startIcon && (
        <span className="absolute left-0 h-full flex items-center ml-3 pointer-events-none">
          {startIcon}
        </span>
      )}
      <input
        type="text"
        onChange={(e) => onDataChange(e.target.value)}
        id={inputID}
        ref={ref}
        placeholder={placeholder}
        className={`w-full bg-transparent outline-none border border-solid border-gray-b4 group-focus-within:border-primary-100 group-focus-within:placeholder:text-primary-75 rounded-lg py-3 body-font-md ${
          startIcon ? "pl-11" : "p-3"
        } ${endIcon ? "pr-11" : "pr-3"}`}
        {...props}
      />
      {endIcon && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center mr-3">
          <Button
            variant="onlyIcon"
            endIcon={endIcon}
            className=""
            type={endIconType}
            onClick={onEndIconClick}
          />
        </div>
      )}
    </div>
  );
});
