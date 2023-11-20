interface TotalItemCount {
  quantity: number;
}

export const TotalItemCount = ({ quantity }: TotalItemCount) => {
  return (
    <p className="font-body-lg px-6">
      {quantity !== 0 ? `${quantity} items` : "empty"}
    </p>
  );
};
