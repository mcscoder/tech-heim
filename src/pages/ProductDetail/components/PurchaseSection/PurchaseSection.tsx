import { Button } from "@/components/Elements";
import { useProductDetailContext } from "@/hooks";
import { formatUSD, getDiscount } from "@/utils";

export interface PurchaseSectionProps {
  className?: string;
}

export const PurchaseSection = ({ className = "" }: PurchaseSectionProps) => {
  const { productDetail } = useProductDetailContext();
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
      <div className="flex flex-col gap-6 mt-4">
        <Button>Buy Now</Button>
        <Button variant="outlined">Add to cart</Button>
      </div>
    </section>
  );
};
