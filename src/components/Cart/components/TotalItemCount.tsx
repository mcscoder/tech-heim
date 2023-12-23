import { BagX } from "@/constants";

interface TotalItemCount {
  quantity: number;
}

export const TotalItemCount = ({ quantity }: TotalItemCount) => {
  return (
    <div>
      {quantity === 0 ? (
        <div className="flex flex-col items-center">
          <img
            src={BagX}
            alt="There is nothing we can do"
            width={200}
          />
          <p className="font-body-lg text-gray-71 text-center">
            There are no products in the cart yet
          </p>
        </div>
      ) : (
        <p className="font-body-lg px-6">{quantity} items</p>
      )}
    </div>
  );
};
