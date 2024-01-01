import { useRef } from "react";
import { Input, OverlayForm, UserInput } from "..";
import { Home2Icon } from "@/constants";
import { useAuthContext, useBooleanState } from "@/hooks";

export const Address = () => {
  const { authState, handleChangeAddress } = useAuthContext();
  const { state, setState } = useBooleanState(false);
  const addressRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit = () => {
    const address = addressRef.current?.value;
    if (address) {
      handleChangeAddress({ address });
      setState(false);
    }
  };

  return (
    <>
      <UserInput
        label="Address"
        startIcon={<Home2Icon />}
        editable
        data={authState.user?.address || "Empty"}
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
            defaultValue={authState.user?.address}
            ref={addressRef}
            required
          />
        </OverlayForm>
      )}
    </>
  );
};
