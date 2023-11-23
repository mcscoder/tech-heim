export const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

export const formatUSD = (amount: number) => {
  return formatCurrency(amount, "USD");
};

export const getPercentage = (lastPrice: number, currentPrice: number) => {
  return (currentPrice / lastPrice) * 100;
};
