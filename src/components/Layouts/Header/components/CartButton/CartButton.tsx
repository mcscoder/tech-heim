import { Button } from "@/components/Elements";
import { BagIcon } from "@/constants";

export const CartButton = () => {
  return (
    <Button
      variant="onlyIcon"
      startIcon={<BagIcon />}
    />
  );
};
