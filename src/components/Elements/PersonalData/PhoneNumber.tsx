import { useRef } from "react";
import { Input, OverlayForm, UserInput } from "..";
import { CallIcon } from "@/constants";
import { handleNumberInput } from "@/utils";
import { useAuthContext, useBooleanState } from "@/hooks";

export const PhoneNumber = () => {
  const { authState, handleChangePhoneNumber } = useAuthContext();

  const { state, setState } = useBooleanState(false);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = () => {
    const phoneNumber = phoneNumberRef.current?.value;
    if (phoneNumber) {
      handleChangePhoneNumber({ phoneNumber });
      setState(false);
    }
  };

  return (
    <>
      <UserInput
        label="Phone number"
        startIcon={<CallIcon />}
        editable
        onClickEditData={() => setState(true)}
        data={authState.user?.phoneNumber || "Empty"}
      />
      {state && (
        <OverlayForm
          editTitle="Edit your phone number"
          saveButtonTitle="Save"
          onSubmit={handleOnSubmit}
          onClickClose={() => setState(false)}
        >
          <Input
            label="Phone number"
            defaultValue={authState.user?.phoneNumber}
            ref={phoneNumberRef}
            onChange={handleNumberInput}
            required
          />
        </OverlayForm>
      )}
    </>
  );
};
