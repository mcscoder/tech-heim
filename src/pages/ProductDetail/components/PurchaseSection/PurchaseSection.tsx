import { Button } from "@/components/Elements";

export interface PurchaseSectionProps {
  className?: string;
}

export const PurchaseSection = ({ className = "" }: PurchaseSectionProps) => {
  const purchaseSectionClasses = `flex flex-col gap-1 p-6 shadow-1 ${className}`;

  return (
    <section className={purchaseSectionClasses}>
      <div className="flex items-center justify-between">
        <h5>$ 1299.00</h5>
        <h6 className="text-Secondary">-12%</h6>
      </div>
      <p className="font-body-sm text-gray-71 flex gap-2">
        <span>Last price</span>
        <span>$1410,87</span>
      </p>
      <div className="flex flex-col gap-6 mt-4">
        <Button>Buy Now</Button>
        <Button variant="outlined">Add to cart </Button>
      </div>
    </section>
  );
};
