import { useRef, useState } from "react";
import { Input, UserInput } from "..";
import { Home2Icon } from "@/constants";

export const Address = () => {
  const [address, setAddress] = useState<string>(
    "HubSpot, 25 First Street, Cambridge MA 02141, United States"
  );

  const addressRef = useRef<HTMLInputElement>(null);

  return (
    <UserInput
      label="Address"
      startIcon={<Home2Icon />}
      editTitle="Edit your address"
      saveButtonTitle="Save"
      editable={true}
      data={address}
      onSave={() => setAddress(addressRef.current?.value as string)}
    >
      <Input
        label="Address"
        defaultValue={address}
        ref={addressRef}
        required
      />
    </UserInput>
  );
};
