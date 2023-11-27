import { ArrowDownRoundedIcon, ArrowUpRoundedIcon } from "@/constants";
import { useState } from "react";
import { Filter, FilterProps } from ".";

export interface ProductFilterProps {
  title: string;
  filters: FilterProps[];
}

export const FilterGroup = ({ title, filters }: ProductFilterProps) => {
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
        <p>{title}</p>
        {expanded ? <ArrowUpRoundedIcon /> : <ArrowDownRoundedIcon />}
      </button>
      {expanded && (
        <div className="flex flex-col items-start gap-4 pb-8 px-4">
          {filters.map((filter, index) => {
            return (
              <Filter
                key={index}
                {...filter}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
