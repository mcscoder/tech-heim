import { Overlay, OverlayProps } from "@/components/Layouts";
import { Form, FormProps } from ".";
import { Button, Message } from "..";
import { CloseIcon } from "@/constants";

export type OverlayFormProps = Pick<OverlayProps, "onClickClose"> &
  Pick<FormProps, "error" | "success"> & {
    editTitle: string;
    saveButtonTitle: string;
    children: React.ReactNode;
    className?: string;
    onSubmit: () => void;
  };

export const OverlayForm = ({
  onClickClose,
  children,
  className,
  error,
  success,
  editTitle,
  saveButtonTitle,
  onSubmit,
}: OverlayFormProps) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Overlay
      className="flex items-center justify-center"
      onClickClose={onClickClose}
    >
      <Form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-3 p-6 bg-white rounded-lg border min-w-[400px]"
      >
        <div className="flex items-center justify-between gap-16">
          <p className="text-gray-44 text-[20px]">{editTitle}</p>
          <Button
            variant="onlyIcon"
            startIcon={<CloseIcon />}
            type="button"
            onClick={onClickClose}
            className="p-1"
          />
        </div>
        {error && <Message variant="error">{error}</Message>}
        {success && <Message variant="success">{success}</Message>}
        <div className={className}>{children}</div>
        <div className="flex justify-end">
          <Button type="submit">{saveButtonTitle}</Button>
        </div>
      </Form>
    </Overlay>
  );
};
