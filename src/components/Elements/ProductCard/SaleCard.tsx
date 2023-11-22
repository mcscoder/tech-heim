import { formatUSD } from "@/utils";
import { Link, LinkProps } from "react-router-dom";
import { PercentDiscount } from "..";

type SaleCardProps = LinkProps & {
  imgURL: string;
  title: string;
  lastPrice: number;
  currentPrice: number;
};

export const SaleCard = ({
  imgURL,
  title,
  lastPrice,
  currentPrice,
  to,
}: SaleCardProps) => {
  return (
    <Link
      to={to}
      className="w-[200px] group p-4 bg-white rounded-lg shadow-1 hover:shadow-2 hover:scale-105 duration-100 relative flex flex-col gap-3"
    >
      <PercentDiscount
        className="absolute top-2 left-0"
        lastPrice={lastPrice}
        currentPrice={currentPrice}
      />
      <div className="">
        <img
          src={imgURL}
          alt={title}
        />
      </div>
      <p className="font-body-sm group-hover:text-primary-500 duration-100 flex-1 line-clamp-2">
        {title}
      </p>
      <div className="flex items-center justify-between">
        <p className="font-body-sm text-gray-71 line-through">
          {formatUSD(lastPrice)}
        </p>
        <p className="font-body-md">{formatUSD(currentPrice)}</p>
      </div>
    </Link>
  );
};
