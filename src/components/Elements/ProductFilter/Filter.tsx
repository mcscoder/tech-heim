import { TickIcon } from "@/constants";
import { useState } from "react";

export interface FilterProps {
  label: string;
  onClick?: () => void;
}

export const Filter = ({ label, onClick = () => {} }: FilterProps) => {
  const [activated, setActivated] = useState<boolean>(false);

  const handleActivated = () => {
    setActivated(!activated);
    onClick();
  };

  return (
    <button
      className="inline-flex items-center gap-4 hover:text-Primary duration-200"
      // onClick={onClick}
      onClick={handleActivated}
    >
      <div
        className={`flex border border-gray-e9e rounded-md ${
          activated ? "!border-transparent" : ""
        }`}
      >
        <TickIcon className={`m-[-3px] ${activated ? "" : "opacity-0"}`} />
      </div>
      <p>{label}</p>
    </button>
  );
};
