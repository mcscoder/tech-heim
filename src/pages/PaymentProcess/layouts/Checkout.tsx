import { Input, UserInput } from "@/components/Elements";
import { SearchIcon } from "@/constants";
import { useRef, useState } from "react";
import { CommonLayout } from "..";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const [address, setAddress] = useState<string>(
    "HubSpot, 25 First Street, Cambridge MA 02141, United States"
  );
  const newAddressRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  return (
    <CommonLayout
      returnPath="/payment-process/cart"
      returnTitle="Return to cart"
      forwardAction={() => navigate("/payment-process/payment")}
      forwardTitle="Continue to pay"
    >
      <div className="flex flex-col gap-2">
        <h5>User</h5>
        <UserInput data="MCS Muscle" />
      </div>
      <div className="flex flex-col gap-2">
        <h5>Ship to</h5>
        <UserInput
          editable
          data={address}
          editTitle="Edit address"
          saveButtonTitle="Confirm and Continue"
          className="flex flex-col"
          onSave={() => {
            setAddress(newAddressRef.current?.value as string);
          }}
        >
          <Input
            label="Address"
            startIcon={<SearchIcon />}
            className="w-[500px]"
            defaultValue={address}
            ref={newAddressRef}
          />
        </UserInput>
      </div>
    </CommonLayout>
  );
};
