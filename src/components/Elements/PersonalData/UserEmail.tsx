import { DirectIcon } from "@/constants";
import { UserInput } from "..";
import { useEffect, useState } from "react";

export const UserEmail = () => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail("mcs@gmail.com");
  }, []);

  return (
    <UserInput
      label="E-mail address"
      startIcon={<DirectIcon />}
      data={email}
    />
  );
};
