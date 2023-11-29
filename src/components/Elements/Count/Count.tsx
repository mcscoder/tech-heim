import { MinusIcon, PlusIcon, TrashIcon } from "@/constants";
import { Button } from "..";

interface CountProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const Count = ({ quantity, setQuantity }: CountProps) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Button
        variant="onlyIcon"
        startIcon={<TrashIcon />}
      />
      <div className="flex items-center gap-3 border-b-[1px] border-b-gray-e9e">
        <Button
          variant="onlyIcon"
          startIcon={<MinusIcon />}
          onClick={() => setQuantity(Math.max(quantity - 1, 1))}
        />
        <span>{quantity}</span>
        <Button
          variant="onlyIcon"
          startIcon={<PlusIcon />}
          onClick={() => setQuantity(quantity + 1)}
        />
      </div>
    </div>
  );
};
