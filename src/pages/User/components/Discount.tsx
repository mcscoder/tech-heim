import { Input, UserInput } from "@/components/Elements";
import { CommonLayout } from ".";
import { useRef } from "react";

export const Discount = () => {
  const discountRef = useRef<HTMLInputElement>(null);

  return (
    <CommonLayout
      title="Discounts & Voucher"
      description="Add discount code to apply a discount in your purchase"
    >
      <UserInput
        label="Discount code"
        editTitle="Redeem discount code"
        saveButtonTitle="Redeem"
        editable={true}
        data="Redeem your discount code"
      >
        <Input
          label="Discount code"
          placeholder="Discount code. Ex: 234-653-244"
          ref={discountRef}
        />
      </UserInput>
    </CommonLayout>
  );
};
