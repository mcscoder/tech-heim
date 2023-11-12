import { Button } from "@/components/Elements";
import { UserIcon } from "@/constants";

export const AccountButton = () => {
  return (
    <Button
      variant="onlyIcon"
      startIcon={<UserIcon />}
    />
    // <Button>Login / Sign Up</Button>
  );
};
