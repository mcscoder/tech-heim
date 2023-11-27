import { ProductContext } from "@/contexts/Product";
import { Product } from "@/pages";
import { getParamValue, paramKeyValuePair } from "@/utils";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const ProductProvider = () => {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (getParamValue(params, "categoryId") === null) {
      setParams(paramKeyValuePair("categoryId", "1"));
    }
  }, []);

  return (
    <ProductContext.Provider value={{ params, setParams }}>
      <Product />
    </ProductContext.Provider>
  );
};
