import { ArrowDownRoundedIcon, ArrowUpRoundedIcon } from "@/constants";

export interface TitleProps {
  title: string;
  isExpanded: boolean;
  onClick: (value: boolean) => void;
}

export const Title = ({ title, isExpanded = false, onClick }: TitleProps) => {
  const titleClasses = `flex items-center justify-between ${
    isExpanded && "text-Primary"
  }`;

  return (
    <button
      onClick={() => onClick(!isExpanded)}
      className={titleClasses}
    >
      <h4>{title}</h4>
      {isExpanded ? <ArrowUpRoundedIcon /> : <ArrowDownRoundedIcon />}
    </button>
  );
};
