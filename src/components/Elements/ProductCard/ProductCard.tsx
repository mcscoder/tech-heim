import { CartIcon, HeartIcon, StarIcon, TrashIcon } from "@/constants";
import { Link } from "react-router-dom";
import { Button, IconText, PercentDiscount } from "..";
import { formatUSD } from "@/utils";
import { ProductTypes } from "@/types";
import { useCartContext } from "@/hooks";

export type ProductCardProps = ProductTypes.ProductCardResponseType & {
  to: string;
  inWishList?: boolean;
  handleWishItem?: () => void;
};

export const ProductCard = ({
  id,
  name,
  productImage = [],
  lastPrice,
  currentPrice,
  rate,
  to,
  inWishList = false,
}: ProductCardProps) => {
  const { handleAddProduct } = useCartContext();

  return (
    <div className="flex flex-col group hover:scale-105 duration-100 relative hover:z-50">
      <Link
        to={to}
        className="flex flex-col gap-4 relative p-4"
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
            src={productImage[0].imageURL}
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
              <p className="text-gray-71 line-through">
                {formatUSD(lastPrice)}
              </p>
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
      <div className="absolute top-0 bottom-0 group-hover:-bottom-14 left-0 right-0 bg-white rounded-lg shadow-1 group-hover:shadow-2 border border-transparent group-hover:border-primary-75 -z-10 flex items-end">
        <div className="hidden group-hover:flex items-center justify-between p-4 flex-1">
          <Button
            variant="outlined"
            startIcon={<CartIcon />}
            onClick={() => handleAddProduct(id)}
          >
            Add to cart
          </Button>
          <Button
            variant="onlyIcon"
            startIcon={
              inWishList ? (
                <TrashIcon
                  width={24}
                  height={24}
                />
              ) : (
                <HeartIcon />
              )
            }
          />
        </div>
      </div>
    </div>
  );
};
