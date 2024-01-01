import { ChangePasswordOverlay, UserInput } from "@/components/Elements";
import { CommonLayout } from ".";
import { KeyIcon } from "@/constants";
import { useBooleanState } from "@/hooks";

export const Security = () => {
  const { state, setState } = useBooleanState(false);

  return (
    <CommonLayout
      title="Security settings"
      description="Change password"
    >
      <UserInput
        label="Password"
        startIcon={<KeyIcon />}
        editable
        onClickEditData={() => setState(true)}
        data="Your password"
      />
      {state && <ChangePasswordOverlay onClickClose={() => setState(false)} />}
    </CommonLayout>
  );
};
