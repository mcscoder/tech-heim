import { formatUSD } from "@/utils";
import { Link } from "react-router-dom";
import { PercentDiscount } from "..";
import { ProductTypes } from "@/types";
import { productPath } from "@/constants";

export const SaleCard = ({
  id,
  name,
  currentPrice,
  lastPrice,
  productImage,
}: ProductTypes.ProductCardResponseType) => {
  return (
    <Link
      to={productPath(id)}
      className="w-[200px] group p-4 bg-white rounded-lg shadow-1 hover:shadow-2 hover:scale-105 duration-100 relative flex flex-col gap-3"
    >
      <PercentDiscount
        className="absolute top-2 left-0"
        lastPrice={lastPrice!}
        currentPrice={currentPrice}
      />
      <div className="flex">
        <img
          className="h-[170px] object-cover"
          src={productImage[0].imageURL}
          alt={name}
        />
      </div>
      <p className="font-body-sm group-hover:text-primary-500 duration-100 line-clamp-2">
        {name}
      </p>
      <div className="flex flex-col justify-end flex-1">
        <p className="font-body-sm text-gray-71 line-through">
          {formatUSD(lastPrice!)}
        </p>
        <p className="font-body-md">{formatUSD(currentPrice)}</p>
      </div>
    </Link>
  );
};
