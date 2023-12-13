import { useScreenLoader } from "@/components/Layouts";
import { WishListContext } from "@/contexts";
import { ProductTypes } from "@/types";
import { getRequestURL, getToken } from "@/utils";
import axios from "axios";
import { useContext } from "react";

export const useWishListContext = () => {
  const wishListContext = useContext(WishListContext);

  if (!wishListContext) {
    throw new Error("useWishListContext must be used within WishListProvider");
  }

  const { wishList, setWishList } = wishListContext;
  const { handleCallApi } = useScreenLoader();

  const getWishList = () => {
    handleCallApi(async () => {
      try {
        const requestURL = getRequestURL("wishlist");
        const response = await axios.get<
          ProductTypes.ProductCardResponseType[]
        >(requestURL, {
          headers: {
            token: getToken().token,
          },
          timeout: 10000,
        });
        setWishList(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleAddProduct = (productId: number) => {
    handleCallApi(async () => {
      try {
        const requestURL = getRequestURL("wishlist");
        await axios.post(
          requestURL,
          { id: productId },
          {
            headers: {
              token: getToken().token,
            },
          }
        );
        getWishList();
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleRemoveProduct = (productId: number) => {
    handleCallApi(async () => {
      try {
        console.log(productId);
        const requestURL = `${getRequestURL("wishlist")}?delete=true`;
        console.log(requestURL);
        await axios.post(
          requestURL,
          { id: productId },
          {
            headers: {
              token: getToken().token,
            },
          }
        );
        getWishList();
      } catch (error) {
        console.log(error);
      }
    });
  };

  return { wishList, getWishList, handleAddProduct, handleRemoveProduct };
};
