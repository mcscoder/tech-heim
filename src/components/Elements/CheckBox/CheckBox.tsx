import { forwardRef } from "react";

type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  inputID: string;
};

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/
export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  function CheckBox({ inputID, ...props }, ref) {
    return (
      <>
        <label
          htmlFor={inputID}
          className="p-[3px] rounded-full border border-gray-71 cursor-pointer"
        >
          <input
            id={inputID}
            type="checkbox"
            className="peer"
            hidden
            ref={ref}
            {...props}
          />
          <div className="w-3 h-3 rounded-full peer-checked:bg-Primary"></div>
        </label>
      </>
    );
  }
);
