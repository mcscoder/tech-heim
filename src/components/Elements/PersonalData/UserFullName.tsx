import { UserIcon } from "@/constants";
import { Input, UserInput } from "..";
import { useRef, useState } from "react";

export const UserFullName = () => {
  const [firstName, setFirstName] = useState<string>("Son");
  const [lastName, setLastName] = useState<string>("Mai");

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  return (
    <UserInput
      data={`${firstName} ${lastName}`}
      startIcon={<UserIcon />}
      editable={true}
      editTitle="First name and Last name"
      label="Full name"
      saveButtonTitle="Save"
      className="flex flex-col gap-4"
      onSave={() => {
        setFirstName(firstNameRef.current?.value as string);
        setLastName(lastNameRef.current?.value as string);
      }}
    >
      <Input
        label="First name"
        ref={firstNameRef}
        defaultValue={firstName}
        required
      />
      <Input
        label="Last name"
        ref={lastNameRef}
        defaultValue={lastName}
        required
      />
    </UserInput>
  );
};
