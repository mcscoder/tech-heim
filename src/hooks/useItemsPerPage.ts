import { useState } from "react";

export const useItemsPerPage = (
  initialItemsPerPage: number,
  maxItemsPerPage?: number
) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(initialItemsPerPage);
  const [maxItems, setMaxItems] = useState<number | undefined>(maxItemsPerPage);

  const updateItemsPerPage = (
    newItemsPerPage: number,
    maxItemsPerPage?: number
  ) => {
    setItemsPerPage(newItemsPerPage);
    setMaxItems(maxItemsPerPage);
  };

  const increaseItemsPerPage = (number: number) => {
    setItemsPerPage((prevItemsPerPage) =>
      validateItemsPerPage(prevItemsPerPage + number)
    );
  };

  const decreaseItemsPerPage = (number: number) => {
    setItemsPerPage((prevItemsPerPage) =>
      validateItemsPerPage(Math.max(prevItemsPerPage - number, 1))
    );
  };

  const validateItemsPerPage = (value: number) => {
    if (maxItems) {
      return Math.min(maxItems, Math.max(value, 1));
    }
    return Math.max(value, 1);
  };

  const isItemsPerPageMaximized = (): boolean => {
    return maxItems ? itemsPerPage >= maxItems : false;
  };

  return {
    itemsPerPage,
    updateItemsPerPage,
    increaseItemsPerPage,
    decreaseItemsPerPage,
    isItemsPerPageMaximized,
  };
};
