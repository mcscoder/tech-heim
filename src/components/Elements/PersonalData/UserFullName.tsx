import { UserIcon } from "@/constants";
import { UserInput } from "..";
import { useAuthContext } from "@/hooks";
// import { useState } from "react";

export const UserFullName = () => {
  const { authState } = useAuthContext();

  // const [displayForm, setDisplayForm] = useState<boolean>(false);

  return (
    <>
      <UserInput
        data={`${authState.user?.firstName} ${authState.user?.lastName}`}
        startIcon={<UserIcon />}
        editable
        // onClickEditData={() => setDisplayForm(true)}
        label="Full name"
      />
      {/* {displayForm && (
        <UserFullNameOverlay onCLickClose={() => setDisplayForm(false)} />
      )} */}
    </>
  );
};
