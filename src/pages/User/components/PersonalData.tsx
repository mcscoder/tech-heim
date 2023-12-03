import {
  Address,
  PhoneNumber,
  PostalCode,
  UserEmail,
  UserFullName,
} from "@/components/Elements";
import { CommonLayout } from ".";

export const PersonalData = () => {
  return (
    <CommonLayout
      title="Identification"
      description="Verify your identity"
    >
      <UserFullName />
      <UserEmail />
      <PhoneNumber />
      <Address />
      <PostalCode />
    </CommonLayout>
  );
};
