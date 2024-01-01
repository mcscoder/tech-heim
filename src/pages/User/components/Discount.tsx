import { Input, OverlayForm, UserInput } from "@/components/Elements";
import { CommonLayout } from ".";
import { useRef } from "react";
import { useBooleanState } from "@/hooks";

export const Discount = () => {
  const discountRef = useRef<HTMLInputElement>(null);

  const { state, setState } = useBooleanState(false);

  const handleOnSubmit = () => {
    // Handle with api here to sync to server
    setState(false);
  };

  return (
    <CommonLayout
      title="Discounts & Voucher"
      description="Add discount code to apply a discount in your purchase"
    >
      <UserInput
        label="Discount code"
        editable
        onClickEditData={() => setState(true)}
        data="Redeem your discount code"
      />
      {state && (
        <OverlayForm
          editTitle="Redeem discount code"
          saveButtonTitle="Redeem"
          onSubmit={handleOnSubmit}
          onClickClose={() => setState(false)}
        >
          <Input
            label="Discount code"
            placeholder="Discount code. Ex: 234-653-244"
            ref={discountRef}
          />
        </OverlayForm>
      )}
    </CommonLayout>
  );
};
