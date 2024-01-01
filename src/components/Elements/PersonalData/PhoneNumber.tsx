import { useRef, useState } from "react";
import { Input, OverlayForm, UserInput } from "..";
import { CallIcon } from "@/constants";
import { handleNumberInput } from "@/utils";
import { useBooleanState } from "@/hooks";

export const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("123123123");

  const { state, setState } = useBooleanState(false);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = () => {
    // Handle with api here to sync to server
    setPhoneNumber(phoneNumberRef.current?.value || "");
    setState(false);
  };

  return (
    <>
      <UserInput
        label="Phone number"
        startIcon={<CallIcon />}
        editable
        onClickEditData={() => setState(true)}
        data={phoneNumber}
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
            defaultValue={phoneNumber}
            ref={phoneNumberRef}
            onChange={handleNumberInput}
            required
          />
        </OverlayForm>
      )}
    </>
  );
};
