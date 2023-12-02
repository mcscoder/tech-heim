import { TickIcon } from "@/constants";
import { ProductContext } from "@/contexts/Product";
import { getParamValue, productTypeId } from "@/utils";
import { useContext, useEffect, useState } from "react";

export interface FilterProps {
  id: number;
  title: string;
}

export const Filter = ({ id, title }: FilterProps) => {
  const productContext = useContext(ProductContext);
  const [activated, setActivated] = useState<boolean>(false);

  // Handle initialize value
  useEffect(() => {
    const productTypeId = getParamValue(
      productContext.params,
      "productTypeId"
    )?.split("-");
    if (productTypeId !== undefined) {
      setActivated(productTypeId.includes(`${id}`));
    }
  }, []);

  const handleActivated = () => {
    setActivated(!activated);
    productContext.setParams({
      ...productTypeId(productContext.params, `${id}`, activated),
    });
  };

  return (
    <button
      className="inline-flex items-center gap-4 hover:text-Primary duration-200"
      onClick={handleActivated}
    >
      <div
        className={`flex border border-gray-e9e rounded-md ${
          activated ? "!border-transparent" : ""
        }`}
      >
        <TickIcon className={`m-[-3px] ${activated ? "" : "opacity-0"}`} />
      </div>
      <p>{title}</p>
    </button>
  );
};
