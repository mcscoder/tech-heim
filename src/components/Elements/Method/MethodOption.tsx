export interface MethodOptionObject {
  title: React.ReactNode;
}

export type MethodOptionProps = MethodOptionObject & {
  isSelected: boolean;
  handleSelecting: () => void;
};

export const MethodOption = ({
  title,
  isSelected,
  handleSelecting,
}: MethodOptionProps) => {
  return (
    <button
      className="flex items-center p-4 bg-gray-f9f rounded-lg gap-2"
      onClick={handleSelecting}
    >
      <div className="p-[3px] rounded-full border border-gray-71">
        <div
          className={`w-4 h-4 rounded-full ${isSelected && "bg-Primary"}`}
        ></div>
      </div>
      <span className="font-body-sm text-gray-d2d h-full flex">{title}</span>
    </button>
  );
};
