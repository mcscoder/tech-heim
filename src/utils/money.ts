export const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

export const formatUSD = (amount: number) => {
  // return formatCurrency(amount, "USD");
  return formatCurrency(amount, "VND");
};

export const getPercentage = (lastPrice: number, currentPrice: number) => {
  return Math.round((currentPrice / lastPrice) * 100);
};

export const getDiscount = (lastPrice: number, currentPrice: number) => {
  return getPercentage(lastPrice, currentPrice) - 100;
};
