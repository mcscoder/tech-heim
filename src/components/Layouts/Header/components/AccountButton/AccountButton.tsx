import { Button } from "@/components/Elements";
import { LoginModal } from "@/components/LoginModal";
import { UserIcon } from "@/constants";
import { AuthContext } from "@/contexts";
// import { UserIcon } from "@/constants";
import { useContext, useState } from "react";

export const AccountButton = () => {
  const [isDisplay, setDisplay] = useState<boolean>(false);
  const loginContext = useContext(AuthContext);
  const isAuthenticated = loginContext?.authState.login.user;

  return (
    <>
      {isAuthenticated ? (
        <Button
          variant="onlyIcon"
          startIcon={<UserIcon />}
        />
      ) : (
        <>
          {isDisplay && <LoginModal onClick={() => setDisplay(false)} />}
          <Button onClick={() => setDisplay(true)}>Login / Sign Up</Button>
        </>
      )}
    </>
  );
};
