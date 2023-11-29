import { formatUSD } from "@/utils";

export interface OrderSummaryCardProps {
  title: string;
  imageURL: string;
  lastPrice: number | undefined;
  currentPrice: number;
  quantity: number;
}

export const OrderSummaryCard = ({
  title,
  imageURL,
  lastPrice,
  currentPrice,
  quantity,
}: OrderSummaryCardProps) => {
  return (
    <div className="flex items-center p-3 gap-2 border-b max-w-[400px]">
      <div className="flex-1">
        <img
          src={imageURL}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 flex-[3]">
        <p className="font-body-xs text-gray-d2d">{title}</p>
        <p className="font-caption-sm text-gray-71">x{quantity}</p>
        <div className="flex items-center justify-end font-body-xs">
          <p className="text-gray-d2d">
            {formatUSD(currentPrice)}{" "}
            {lastPrice && (
              <span className="text-gray-71">from {formatUSD(lastPrice)}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
