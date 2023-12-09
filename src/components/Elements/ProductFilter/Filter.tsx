import { TickIcon } from "@/constants";
import { useProductContext } from "@/hooks";
import { ProductTypes } from "@/types";
import { useEffect, useState } from "react";

export const Filter = ({ id, title }: ProductTypes.ProductType) => {
  const { setParams, getParamValue, productTypeId } = useProductContext();
  const [activated, setActivated] = useState<boolean>(false);

  // Handle initialize value
  useEffect(() => {
    const productTypeId = getParamValue("productTypeId")?.split("-");

    if (productTypeId === undefined) {
      setActivated(false);
    } else {
      setActivated(productTypeId.includes(`${id}`));
    }
  }, [getParamValue("productTypeId")]);

  const handleActivated = () => {
    setParams({
      ...productTypeId(`${id}`, activated),
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
