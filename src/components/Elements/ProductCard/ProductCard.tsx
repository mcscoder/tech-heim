import { StarIcon } from "@/constants";
import { Link } from "react-router-dom";
import { IconText, PercentDiscount } from "..";
import { formatUSD } from "@/utils";

export interface ProductCardApi {
  id: number;
  name: string;
  imageURLs: { imageURL: string }[];
  lastPrice: number | null;
  currentPrice: number;
  rate: number;
}

type ProductCardProps = ProductCardApi & {
  to: string;
};

export const ProductCard = ({
  // id,
  name,
  imageURLs = [],
  lastPrice,
  currentPrice,
  rate,
  to,
}: ProductCardProps) => {
  console.log(imageURLs[0].imageURL);
  return (
    <Link
      to={to}
      className="group p-4 bg-white rounded-lg shadow-1 hover:shadow-2 hover:scale-105 duration-100 flex flex-col gap-4 border border-transparent hover:border-primary-75 relative"
    >
      {lastPrice && (
        <PercentDiscount
          className="absolute top-2 left-0"
          lastPrice={lastPrice}
          currentPrice={currentPrice}
        />
      )}
      <div className="border-b group-hover:border-b-primary-75 pb-4 duration-100">
        <img
          src={imageURLs[0].imageURL}
          alt={name}
        />
      </div>
      <p className="font-body-md group-hover:text-Primary line-clamp-2 duration-100">
        {name}
      </p>
      <div className="flex items-end justify-between">
        <div className="flex flex-col items-start">
          {/* last price */}
          {lastPrice && (
            <p className="text-gray-71 line-through">{formatUSD(lastPrice)}</p>
          )}
          {/* current price */}
          <p className="font-body-lg">{formatUSD(currentPrice)}</p>
        </div>
        <IconText
          startIcon={<StarIcon />}
          className="text-[16px] font-medium"
        >
          {rate}
        </IconText>
      </div>
    </Link>
  );
};
