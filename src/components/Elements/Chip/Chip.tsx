import { useContext } from "react";
import { FilterProps } from "..";
import { productTypeId } from "@/utils";
import { ProductContext } from "@/contexts/Product";

export const Chip = ({ id, title }: FilterProps) => {
  const productContext = useContext(ProductContext);

  const handleRemoveFilter = () => {
    productContext.setParams({
      ...productTypeId(productContext.params, `${id}`, true),
    });
  };

  return (
    <button
      className="inline-flex items-center gap-6 font-button-lg border-2 rounded-lg border-black p-2"
      onClick={handleRemoveFilter}
    >
      <p>{title}</p>
      <span className="flex items-center justify-center border-2 border-black rounded-lg w-6 h-6">
        X
      </span>
    </button>
  );
};
