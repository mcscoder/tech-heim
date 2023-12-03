import { useRef, useState } from "react";
import { Input, UserInput } from "..";
import { CallIcon } from "@/constants";
import { handleNumberInput } from "@/utils";

export const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("123123123");

  const phoneNumberRef = useRef<HTMLInputElement>(null);

  return (
    <UserInput
      label="Phone number"
      startIcon={<CallIcon />}
      editTitle="Phone number"
      saveButtonTitle="Save"
      editable={true}
      data={phoneNumber}
      onSave={() => setPhoneNumber(phoneNumberRef.current?.value as string)}
    >
      <Input
        label="Phone number"
        defaultValue={phoneNumber}
        ref={phoneNumberRef}
        onChange={handleNumberInput}
        required
      />
    </UserInput>
  );
};
