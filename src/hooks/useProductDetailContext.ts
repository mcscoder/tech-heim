import { useScreenLoader } from "@/components/Layouts";
import { ProductDetailContext } from "@/contexts";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const useProductDetailContext = () => {
  const productDetailContext = useContext(ProductDetailContext);

  if (!productDetailContext) {
    throw new Error(
      "useProductDetailContext must be used within ProductDetailProvider"
    );
  }

  const { productDetail, setProductDetail } = productDetailContext;
  const { productId } = useParams();
  const { handleCallApi } = useScreenLoader();

  const getProductDetail = () => {
    handleCallApi(async () => {
      try {
        const requestURL = `${getRequestURL("product")}/${productId}`;
        const response = await axios.get(requestURL);

        if (response.status !== 200) {
          throw new Error("Can not fetch product detail data");
        }
        setProductDetail(response.data);
      } catch (error) {
        console.log((error as Error).message);
      }
    });
  };

  return { productDetail, setProductDetail, productId, getProductDetail };
};
