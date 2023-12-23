import { useScreenLoader } from "@/components/Layouts";
import { ProductContext } from "@/contexts/Product";
import { selectCategory, selectType } from "@/redux";
import { ProductTypes } from "@/types";
import { getRequestURL } from "@/utils";
import axios from "axios";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export const useProductContext = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error("useProductContext must be used within ProductProvider");
  }

  const { handleCallApi } = useScreenLoader();
  const [params, setParams] = useSearchParams();
  const { productGroups, products } = productContext.productState;
  const productDispatch = productContext.productDispatch;

  const paramKeyValuePair = (
    key: ProductTypes.SearchParamKeys,
    value: string
  ) => {
    // computed property name
    return { [key]: value };
  };

  const getParamValue = (key: ProductTypes.SearchParamKeys) => {
    return params.get(key);
  };

  const getParams = (): ProductTypes.SearchParamTypes => {
    const categoryId = getParamValue("categoryId");
    const productTypeId = getParamValue("productTypeId");
    const sort = getParamValue("sort");

    return {
      ...(categoryId && { categoryId: categoryId }),
      ...(productTypeId && { productTypeId: productTypeId }),
      ...((sort === "ascending" || sort === "descending") && { sort: sort }),
    };
  };

  const categoryId = (value: string): ProductTypes.SearchParamTypes => {
    const currentParams: ProductTypes.SearchParamTypes = getParams();
    return {
      ...currentParams,
      categoryId: value,
    };
  };

  const productTypeId = (
    value: string,
    remove: boolean = false
  ): ProductTypes.SearchParamTypes => {
    const currentParams: ProductTypes.SearchParamTypes = getParams();
    const productTypeId = currentParams.productTypeId?.split("-");

    // Handle initial productTypeId
    if (productTypeId === undefined) {
      return {
        ...currentParams,
        productTypeId: value,
      };
    }

    // Handle add or remove filter
    if (remove) {
      // Handle remove
      const indexToRemove = productTypeId.indexOf(value);
      productTypeId.splice(indexToRemove, 1);
    } else {
      // Handle add
      productTypeId.push(value);
    }

    // Remove object key if there is nothing filter
    if (productTypeId.length === 0) {
      delete currentParams.productTypeId;
      return currentParams;
    }

    return {
      ...currentParams,
      productTypeId: productTypeId.join("-"),
    };
  };

  const sort = (
    value: ProductTypes.SortTypes
  ): ProductTypes.SearchParamTypes => {
    const currentParams: ProductTypes.SearchParamTypes = getParams();
    return {
      ...currentParams,
      sort: value,
    };
  };

  const clearProductType = (): ProductTypes.SearchParamTypes => {
    const currentParams: ProductTypes.SearchParamTypes = getParams();
    delete currentParams.productTypeId;
    return currentParams;
  };

  const getProducts = () => {
    handleCallApi(async () => {
      try {
        const query = location.search;
        const requestURL = `${getRequestURL("product")}${query}`;
        const response = await axios.get(requestURL, {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        });
        if (response.status !== 200) {
          throw new Error("Can not fetch product");
        }
        productDispatch(selectType(response.data));
      } catch (error) {
        console.log((error as Error).message);
      }
    });
  };

  const getProductGroups = () => {
    handleCallApi(async () => {
      try {
        const query = location.search;
        const requestURL = `${getRequestURL("productGroup")}${query}`;
        const response = await axios.get(requestURL, {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        });
        if (response.status !== 200) {
          throw new Error("Can not fetch product");
        }
        productDispatch(selectCategory(response.data));
      } catch (error) {
        console.log((error as Error).message);
      }
    });
  };

  return {
    params,
    setParams,
    productGroups,
    products,
    paramKeyValuePair,
    getParamValue,
    getParams,
    categoryId,
    productTypeId,
    sort,
    clearProductType,
    getProducts,
    getProductGroups,
  };
};
