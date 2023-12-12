import { CloseIcon, EditIcon } from "@/constants";
import { Button } from "..";
import { FormEvent, useState } from "react";
import { Overlay } from "@/components/Layouts";

export interface UserInputProps {
  data: string;
  editable?: boolean;
  children?: React.ReactNode;
  editTitle?: string;
  saveButtonTitle?: string;
  onSave?: () => void;
  className?: string;
  label?: string;
  startIcon?: React.ReactNode;
}

export const UserInput = ({
  data,
  editable = false,
  children,
  editTitle,
  saveButtonTitle,
  onSave = () => {},
  className,
  label,
  startIcon,
}: UserInputProps) => {
  const [editData, setEditData] = useState<boolean>(false);

  const handleOnSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave();
    setEditData(false);
  };

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
          <>
            <Button
              variant="onlyIcon"
              startIcon={<EditIcon />}
              className="absolute right-2"
              onClick={() => setEditData(!editData)}
            />
            {editData && (
              <Overlay
                onCLickClose={() => setEditData(false)}
                className="flex items-center justify-center"
              >
                <form
                  onSubmit={handleOnSave}
                  className="flex flex-col gap-8 p-6 bg-white rounded-lg border min-w-[400px]"
                >
                  <div className="flex items-center justify-between gap-16">
                    <h5 className="text-gray-44">{editTitle}</h5>
                    <Button
                      variant="onlyIcon"
                      startIcon={<CloseIcon />}
                      type="button"
                      onClick={() => setEditData(false)}
                    />
                  </div>
                  <div className={className}>{children}</div>
                  <div className="flex justify-end">
                    <Button type="submit">{saveButtonTitle}</Button>
                  </div>
                </form>
              </Overlay>
            )}
          </>
        )}
      </div>
    </div>
  );
};
