import { ProductContext } from "@/contexts";
import { useProductContext } from "@/hooks";
import { Product } from "@/pages";
import { initialProductState, productReducer } from "@/redux";
import { useEffect, useReducer } from "react";

interface InitialParamStateProps {
  children: React.ReactNode;
}

const InitialParamState = ({ children }: InitialParamStateProps) => {
  const { setParams, getParamValue, paramKeyValuePair } = useProductContext();

  useEffect(() => {
    if (getParamValue("categoryId") === null) {
      setParams(paramKeyValuePair("categoryId", "1"));
    }
  }, []);
  return children;
};

export const ProductProvider = () => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      <InitialParamState>
        <Product />
      </InitialParamState>
    </ProductContext.Provider>
  );
};
