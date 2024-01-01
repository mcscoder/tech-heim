import { UserIcon } from "@/constants";
import { Input, OverlayForm, UserInput } from "..";
import { useAuthContext, useBooleanState } from "@/hooks";
import { useRef } from "react";

export const UserFullName = () => {
  const { authState, handleChangeUserFullName } = useAuthContext();

  const { state, setState } = useBooleanState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;

    if (firstName && lastName) {
      handleChangeUserFullName({ firstName, lastName });
      setState(false);
    }
  };

  return (
    <>
      <UserInput
        label="Full name"
        startIcon={<UserIcon />}
        editable
        onClickEditData={() => setState(true)}
        data={`${authState.user?.firstName} ${authState.user?.lastName}`}
      />
      {state && (
        <OverlayForm
          editTitle="First name and last name"
          saveButtonTitle="Save"
          onSubmit={handleOnSubmit}
          onClickClose={() => setState(false)}
          className="flex flex-col gap-4"
        >
          <Input
            label="First name"
            defaultValue={authState.user?.firstName}
            ref={firstNameRef}
            required
          />
          <Input
            label="Last name"
            defaultValue={authState.user?.lastName}
            ref={lastNameRef}
            required
          />
        </OverlayForm>
      )}
    </>
  );
};
