export type TextFieldProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    onChange?: (value: string) => void;
  };

export const TextField = ({
  onChange,
  className = "",
  placeholder = "",
  rows = 4,
}: TextFieldProps) => {
  const textFieldClasses = `font-button-sm px-6 py-2 border rounded-lg border-gray-e9e focus:border-Primary focus:text-Primary focus:placeholder:text-primary-75 outline-none ${className}`;
  return (
    <textarea
      className={textFieldClasses}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
  );
};
