import { Button } from "@/components/Elements";
import { LoginModal } from "@/components/LoginModal";
import { ProfileMenu } from "@/components/ProfileMenu";
import { UserIcon } from "@/constants";
import { AuthContext } from "@/contexts";
// import { UserIcon } from "@/constants";
import { useContext, useState } from "react";

export const AccountButton = () => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [profileMenu, setProfileMenu] = useState<boolean>(false);
  const loginContext = useContext(AuthContext);

  const isAuthenticated = loginContext?.authState.user; // null if not yet authenticated

  const handleUserButton = () => {
    setProfileMenu(!profileMenu);
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          {profileMenu && <ProfileMenu />}
          <Button
            variant="onlyIcon"
            startIcon={<UserIcon />}
            onClick={handleUserButton}
          />
        </>
      ) : (
        <>
          {loginModal && <LoginModal onClick={() => setLoginModal(false)} />}
          <Button onClick={() => setLoginModal(true)}>Login / Sign Up</Button>
        </>
      )}
    </>
  );
};
