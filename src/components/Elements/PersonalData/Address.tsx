import { useRef, useState } from "react";
import { Input, OverlayForm, UserInput } from "..";
import { Home2Icon } from "@/constants";
import { useBooleanState } from "@/hooks";

export const Address = () => {
  const [address, setAddress] = useState<string>(
    "HubSpot, 25 First Street, Cambridge MA 02141, United States"
  );

  const { state, setState } = useBooleanState(false);
  const addressRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = () => {
    // Handle with api here to sync to server
    setAddress(addressRef.current?.value || "");
    setState(false);
  };

  return (
    <>
      <UserInput
        label="Address"
        startIcon={<Home2Icon />}
        editable
        data={address}
        onClickEditData={() => setState(true)}
      />
      {state && (
        <OverlayForm
          editTitle="Edit your address"
          saveButtonTitle="Save"
          onSubmit={handleOnSubmit}
          onClickClose={() => setState(false)}
        >
          <Input
            label="Address"
            defaultValue={address}
            ref={addressRef}
            required
          />
        </OverlayForm>
      )}
    </>
  );
};
