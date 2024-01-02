import { DirectIcon } from "@/constants";
import { UserInput } from "..";
import { useAuthContext } from "@/hooks";

export const UserEmail = () => {
  const { authState } = useAuthContext();

  return (
    <UserInput
      label="E-mail address"
      startIcon={<DirectIcon />}
      data={authState.user?.email || ""}
    />
  );
};
