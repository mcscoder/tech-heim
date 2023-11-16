type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  inputID: string;
  startLabel?: string;
  endLabel?: string;
};

export const CheckBox = ({
  inputID,
  startLabel,
  endLabel,
  className = "",
  ...props
}: CheckBoxProps) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {startLabel && (
        <label
          htmlFor={inputID}
          className="pl-2 font-body-md text-gray-71 select-none cursor-pointer"
        >
          {startLabel}
        </label>
      )}
      <div className="relative rounded-lg overflow-hidden w-[22px] h-[22px] border border-gray-71">
        <input
          id={inputID}
          type="checkbox"
          className="absolute top-[-1px] right-[-1px] bottom-[-1px] left-[-1px] rounded-lg cursor-pointer"
          {...props}
        />
      </div>
      {endLabel && (
        <label
          htmlFor={inputID}
          className="pl-2 font-body-md text-gray-71 select-none cursor-pointer"
        >
          {endLabel}
        </label>
      )}
    </div>
  );
};
