import { useScreenLoader } from "@/components/Layouts";
import { ProductTypes } from "@/types";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { useState } from "react";

export const useHomeProductState = () => {
  const [products, setProducts] =
    useState<ProductTypes.ProductCardResponseType[]>();

  const { handleCallApi } = useScreenLoader();

  const getSaleProducts = () => {
    handleCallApi(async () => {
      try {
        const requestURL = `${getRequestURL("homeProduct")}?sale=true`;
        const response =
          await axios.get<ProductTypes.ProductCardResponseType[]>(requestURL);

        setProducts(response.data);
      } catch (error) {
        console.log((error as Error).message);
      }
    });
  };

  const getNewProducts = () => {
    handleCallApi(async () => {
      try {
        const requestURL = `${getRequestURL("homeProduct")}?new-product=true`;
        const response =
          await axios.get<ProductTypes.ProductCardResponseType[]>(requestURL);

        setProducts(response.data);
      } catch (error) {
        console.log((error as Error).message);
      }
    });
  };

  const getBestSellerProducts = () => {
    handleCallApi(async () => {
      try {
        const requestURL = `${getRequestURL("homeProduct")}?best-seller=true`;
        const response =
          await axios.get<ProductTypes.ProductCardResponseType[]>(requestURL);

        setProducts(response.data);
      } catch (error) {
        console.log((error as Error).message);
      }
    });
  };

  return { products, getSaleProducts, getNewProducts, getBestSellerProducts };
};
