import { useRef, useState } from "react";
import { Input, UserInput } from "..";
import { SignPostIcon } from "@/constants";
import { handleNumberInput } from "@/utils";

export const PostalCode = () => {
  const [postalCode, setPostalCode] = useState<string>("55000");

  const postalCodeRef = useRef<HTMLInputElement>(null);

  return (
    <UserInput
      label="Postal code"
      startIcon={<SignPostIcon />}
      editTitle="Edit your postal code"
      saveButtonTitle="Save"
      editable={true}
      data={postalCode}
      onSave={() => setPostalCode(postalCodeRef.current?.value as string)}
    >
      <Input
        label="Postal code"
        defaultValue={postalCode}
        ref={postalCodeRef}
        onChange={handleNumberInput}
        required
      />
    </UserInput>
  );
};
