import { getDiscount } from "@/utils";

interface PercentDiscount {
  className: string;
  lastPrice: number;
  currentPrice: number;
}

export const PercentDiscount = ({
  className,
  lastPrice,
  currentPrice,
}: PercentDiscount) => {
  const percentDiscountClasses = `bg-secondary-100 text-secondary-400 font-body-sm inline-flex px-2 py-1 rounded-tr-lg rounded-br-lg ${className}`;

  return (
    <div className={percentDiscountClasses}>
      {getDiscount(lastPrice, currentPrice)}%
    </div>
  );
};
