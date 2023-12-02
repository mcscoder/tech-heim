import { ProductApi } from "@/api";
import {
  Chip,
  FilterGroup,
  ProductCard,
  ProductCardApi,
  ProductFilterProps,
  SidebarFilter,
} from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";
import { ProductContext } from "@/contexts/Product";
import { getParamValue } from "@/utils";
import { useContext, useEffect, useMemo, useState } from "react";

export const MainProductSection = () => {
  const productContext = useContext(ProductContext);
  const [productGroups, setProductGroups] = useState<
    ProductFilterProps[] | null
  >(null);
  const [products, setProducts] = useState<ProductCardApi[] | null>(null);

  const productTypeIds = useMemo(() => {
    return getParamValue(productContext.params, "productTypeId")?.split("-");
  }, [getParamValue(productContext.params, "productTypeId")]);

  //
  useEffect(() => {
    ProductApi.getProductGroup(location.search).then(
      (productGroups: ProductFilterProps[]) => {
        setProductGroups(productGroups);
      }
    );
  }, [getParamValue(productContext.params, "categoryId")]);

  useEffect(() => {
    ProductApi.getProduct(location.search).then(
      (products: ProductCardApi[]) => {
        setProducts(products);
      }
    );
  }, [productContext.params]);

  return (
    <section className="content-container flex flex-col gap-10">
      <div className="flex gap-2 min-h-[44px] flex-wrap">
        {productTypeIds &&
          productGroups?.map((productGroup) => {
            return (
              <>
                {productGroup.productType.map((type, index) => {
                  if (productTypeIds.includes(`${type.id}`)) {
                    return (
                      <Chip
                        key={index}
                        {...type}
                      />
                    );
                  }
                })}
              </>
            );
          })}
      </div>
      <div className="flex gap-6">
        <SidebarFilter>
          {productGroups?.map((productGroup, index) => {
            return (
              <FilterGroup
                key={index}
                {...productGroup}
              />
            );
          })}
        </SidebarFilter>
        <ProductGridWrapper className="flex-1">
          {products?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                to={"#"}
                {...product}
              />
            );
          })}
        </ProductGridWrapper>
      </div>
    </section>
  );
};
