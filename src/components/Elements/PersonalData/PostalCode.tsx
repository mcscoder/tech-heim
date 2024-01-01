import { useRef, useState } from "react";
import { Input, OverlayForm, UserInput } from "..";
import { SignPostIcon } from "@/constants";
import { handleNumberInput } from "@/utils";
import { useBooleanState } from "@/hooks";

export const PostalCode = () => {
  const [postalCode, setPostalCode] = useState<string>("55000");

  const { state, setState } = useBooleanState(false);
  const postalCodeRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = () => {
    // Handle with api here to sync to server
    setPostalCode(postalCodeRef.current?.value || "");
    setState(false);
  };

  return (
    <>
      <UserInput
        label="Postal code"
        startIcon={<SignPostIcon />}
        editable
        onClickEditData={() => setState(true)}
        data={postalCode}
      />
      {state && (
        <OverlayForm
          editTitle="Edit your postal code"
          saveButtonTitle="Save"
          onSubmit={handleOnSubmit}
          onClickClose={() => setState(false)}
        >
          <Input
            label="Postal code"
            defaultValue={postalCode}
            ref={postalCodeRef}
            onChange={handleNumberInput}
            required
          />
        </OverlayForm>
      )}
    </>
  );
};
