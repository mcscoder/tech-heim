import { CloseIcon, EditIcon } from "@/constants";
import { Button } from "..";
import { useState } from "react";
import { Overlay } from "@/components/Layouts";

export interface UserInputProps {
  data: string;
  editable?: boolean;
  children?: React.ReactNode;
  editTitle?: string;
  saveButtonTitle?: string;
  onSave?: () => void;
  className?: string;
}

export const UserInput = ({
  data,
  editable = false,
  children,
  editTitle,
  saveButtonTitle,
  onSave = () => {},
  className,
}: UserInputProps) => {
  const [editData, setEditData] = useState<boolean>(false);

  const handleOnSave = () => {
    onSave();
    setEditData(false);
    console.log("asdfasdfasd");
  };

  return (
    <div
      className={`relative flex items-center bg-gray-f9f rounded-lg py-4 pl-4 ${
        editable ? "pr-12" : "pr-4"
      }`}
    >
      <p>{data}</p>
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
              onClick={() => setEditData(false)}
              className="flex items-center justify-center"
            >
              <form
                onSubmit={handleOnSave}
                className="flex flex-col gap-8 p-6 bg-white rounded-lg border"
              >
                <div className="flex items-center justify-between">
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
  );
};
