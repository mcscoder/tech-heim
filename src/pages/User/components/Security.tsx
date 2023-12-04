import { Input, UserInput } from "@/components/Elements";
import { CommonLayout } from ".";
import { EyeIcon, KeyIcon } from "@/constants";
import { useRef } from "react";
import { handleShowPassword } from "@/utils";

export const Security = () => {
  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  return (
    <CommonLayout
      title="Security settings"
      description="Change password"
    >
      <UserInput
        label="Password"
        startIcon={<KeyIcon />}
        editTitle="Change your password"
        saveButtonTitle="Save"
        editable={true}
        data="Your password"
        className="flex flex-col gap-4"
      >
        <Input
          label="Current password"
          ref={currentPasswordRef}
          type="password"
          endIcon={<EyeIcon />}
          endIconType="button"
          onEndIconClick={() => handleShowPassword(currentPasswordRef)}
        />
        <Input
          label="New password"
          ref={newPasswordRef}
          type="password"
          endIcon={<EyeIcon />}
          endIconType="button"
          onEndIconClick={() => handleShowPassword(newPasswordRef)}
        />
        <Input
          label="Confirm new password"
          ref={confirmPasswordRef}
          type="password"
          endIcon={<EyeIcon />}
          endIconType="button"
          onEndIconClick={() => handleShowPassword(confirmPasswordRef)}
        />
      </UserInput>
    </CommonLayout>
  );
};
