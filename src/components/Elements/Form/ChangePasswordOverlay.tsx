import { useRef } from "react";
import { OverlayForm } from ".";
import { Button, Input } from "..";
import { EyeIcon } from "@/constants";
import { handleShowPassword } from "@/utils";
import { useChangePassword } from "@/hooks";
import { OverlayProps } from "@/components/Layouts";

export type ChangePasswordOverlayProps = Pick<OverlayProps, "onClickClose">;

export const ChangePasswordOverlay = ({
  onClickClose,
}: ChangePasswordOverlayProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);

  const { formState, setFormState, handleGetCode, handleNewPassword } =
    useChangePassword();

  const handleEmailSubmit = () => {
    if (emailRef.current) {
      const email = emailRef.current.value;
      handleGetCode(email);
    }
  };

  const handleResetPassword = () => {
    if (newPasswordRef.current?.value !== confirmPasswordRef.current?.value) {
      setFormState((prev) => {
        return {
          ...prev,
          error: "Retype password does not match",
          success: undefined,
        };
      });
      return;
    }

    handleNewPassword(
      emailRef.current?.value as string,
      codeRef.current?.value as string,
      newPasswordRef.current?.value as string
    );
  };

  return (
    <OverlayForm
      editTitle="Reset your password"
      saveButtonTitle="Reset"
      onClickClose={onClickClose}
      onSubmit={handleResetPassword}
      className="flex flex-col gap-3"
      {...formState}
    >
      <div className="flex gap-4">
        <Input
          label="Email"
          ref={emailRef}
          disabled={formState.email}
          required
          // onChange={}
        />
        <Button
          variant="outlined"
          type="button"
          disabled={formState.email}
          onClick={handleEmailSubmit}
        >
          Get code
        </Button>
      </div>
      <Input
        label="New password"
        ref={newPasswordRef}
        type="password"
        endIcon={<EyeIcon />}
        endIconType="button"
        onEndIconClick={() => handleShowPassword(newPasswordRef)}
        required
      />
      <Input
        label="Confirm new password"
        ref={confirmPasswordRef}
        type="password"
        endIcon={<EyeIcon />}
        endIconType="button"
        onEndIconClick={() => handleShowPassword(confirmPasswordRef)}
        required
      />
      <Input
        label="Code"
        ref={codeRef}
        required
      />
    </OverlayForm>
  );
};
