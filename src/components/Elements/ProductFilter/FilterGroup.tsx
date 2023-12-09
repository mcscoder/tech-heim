import { ArrowDownRoundedIcon, ArrowUpRoundedIcon } from "@/constants";
import { useState } from "react";
import { Filter } from ".";
import { ProductTypes } from "@/types";

export const FilterGroup = ({
  title,
  productType,
}: ProductTypes.ProductGroup) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpanding = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col min-w-[280px] font-body-lg border-b border-b-gray-e9e">
      <button
        className={`flex items-center justify-between p-4`}
        onClick={handleExpanding}
      >
        <p className="font-body-xl !font-normal">{title}</p>
        {expanded ? <ArrowUpRoundedIcon /> : <ArrowDownRoundedIcon />}
      </button>
      {expanded && (
        <div className="flex flex-col items-start gap-4 pb-8 px-4">
          {productType.map((type, index) => {
            return (
              <Filter
                key={index}
                {...type}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
