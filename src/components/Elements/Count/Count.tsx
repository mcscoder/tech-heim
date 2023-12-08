import { MinusIcon, PlusIcon, TrashIcon } from "@/constants";
import { Button } from "..";
import { useCartContext } from "@/hooks";

interface CountProps {
  quantity: number;
  productId: number;
}

export const Count = ({ quantity, productId }: CountProps) => {
  const { handleAddProduct, handleDecreaseProduct, handleRemoveProduct } =
    useCartContext();

  return (
    <div className="flex items-center justify-center gap-1">
      <Button
        variant="onlyIcon"
        startIcon={<TrashIcon />}
        onClick={() => {
          handleRemoveProduct(productId);
        }}
      />
      <div className="flex items-center gap-3 border-b-[1px] border-b-gray-e9e">
        <Button
          variant="onlyIcon"
          startIcon={<MinusIcon />}
          onClick={() => {
            if (quantity !== 1) {
              handleDecreaseProduct(productId);
            }
          }}
        />
        <span>{quantity}</span>
        <Button
          variant="onlyIcon"
          startIcon={<PlusIcon />}
          onClick={() => {
            handleAddProduct(productId);
          }}
        />
      </div>
    </div>
  );
};
