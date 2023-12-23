import { WishListContext } from "@/contexts";
import { useWishListContext } from "@/hooks";
import { ProductTypes } from "@/types";
import { useEffect, useState } from "react";

export interface WishListProviderProps {
  children: React.ReactNode;
}

const InitialWishListProviderState = ({ children }: WishListProviderProps) => {
  const { getWishList } = useWishListContext();
  useEffect(() => {
    getWishList();
  }, []);

  return children;
};

export const WishListProvider = ({ children }: WishListProviderProps) => {
  const [wishList, setWishList] = useState<
    ProductTypes.ProductCardResponseType[]
  >([]);

  return (
    <WishListContext.Provider value={{ wishList, setWishList }}>
      <InitialWishListProviderState>{children}</InitialWishListProviderState>
    </WishListContext.Provider>
  );
};
