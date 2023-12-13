import { EditIcon } from "@/constants";
import { Button } from "..";

export interface UserInputProps {
  data: string;
  editable?: boolean;
  onClickEditData?: () => void;
  label?: string;
  startIcon?: React.ReactNode;
}

export const UserInput = ({
  data,
  editable = false,
  onClickEditData,
  label,
  startIcon,
}: UserInputProps) => {
  return (
    <div className="flex flex-col text-gray-71">
      {label && <p className="font-body-sm ml-5">{label}</p>}
      <div
        className={`relative inline-flex items-center bg-gray-f9f rounded-lg py-4 pl-4 gap-3 ${
          editable ? "pr-12" : "pr-4"
        }`}
      >
        {startIcon && startIcon}
        <p className="font-body-md line-clamp-1">{data}</p>
        {editable && (
          <Button
            variant="onlyIcon"
            startIcon={<EditIcon />}
            className="absolute right-2"
            onClick={onClickEditData}
          />
        )}
      </div>
    </div>
  );
};
