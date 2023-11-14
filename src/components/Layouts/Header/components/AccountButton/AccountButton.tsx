import { Button } from "@/components/Elements";
import { LoginModal } from "@/components/LoginModal";
// import { UserIcon } from "@/constants";
import { useState } from "react";

export const AccountButton = () => {
  const [login, setLogin] = useState<boolean>(false);

  return (
    // <Button
    //   variant="onlyIcon"
    //   startIcon={<UserIcon />}
    // />
    <>
      {login && <LoginModal onClick={() => setLogin(false)} />}
      <Button onClick={() => setLogin(true)}>Login / Sign Up</Button>
    </>
  );
};
