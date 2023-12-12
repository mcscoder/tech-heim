import { Button } from "@/components/Elements";
import { HeartIcon } from "@/constants";
import {
  useCartContext,
  useProductDetailContext,
  useWishListContext,
} from "@/hooks";
import { formatUSD, getDiscount } from "@/utils";
import { useNavigate } from "react-router";

export interface PurchaseSectionProps {
  className?: string;
}

export const PurchaseSection = ({ className = "" }: PurchaseSectionProps) => {
  const { productDetail } = useProductDetailContext();
  const { handleAddProduct: addToCart } = useCartContext();
  const { handleAddProduct: addToWish } = useWishListContext();
  const navigate = useNavigate();

  const purchaseSectionClasses = `flex flex-col gap-1 p-6 shadow-1 ${className}`;

  return (
    <section className={purchaseSectionClasses}>
      <div className="flex items-center justify-between">
        <h5>{formatUSD(productDetail.currentPrice)}</h5>
        {productDetail.lastPrice && (
          <h6 className="text-Secondary">
            {getDiscount(productDetail.lastPrice, productDetail.currentPrice)}%
          </h6>
        )}
      </div>
      {productDetail.lastPrice && (
        <p className="font-body-sm text-gray-71 flex gap-2">
          <span>Last price</span>
          <span>{formatUSD(productDetail.lastPrice)}</span>
        </p>
      )}
      <div className="flex flex-col gap-4 mt-4">
        <Button
          onClick={() => {
            addToCart(productDetail.id);
            navigate("/payment-process/cart");
          }}
        >
          Buy Now
        </Button>
        <div className="flex gap-6 items-center">
          <Button
            variant="outlined"
            className="flex-1"
            onClick={() => addToCart(productDetail.id)}
          >
            Add to cart
          </Button>
          <Button
            variant="onlyIcon"
            startIcon={<HeartIcon />}
            onClick={() => addToWish(productDetail.id)}
          />
        </div>
      </div>
    </section>
  );
};
