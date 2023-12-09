import {
  Chip,
  FilterGroup,
  ProductCard,
  SidebarFilter,
} from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";
import { useProductContext } from "@/hooks";
import { useEffect, useMemo } from "react";

export const MainProductSection = () => {
  const {
    params,
    getParamValue,
    getProductGroups,
    getProducts,
    productGroups,
    products,
  } = useProductContext();

  const productTypeIds = useMemo(() => {
    return getParamValue("productTypeId")?.split("-");
  }, [getParamValue("productTypeId")]);

  console.log(params);

  // Handle get product group depend on category
  useEffect(() => {
    if (location.search === "") {
      return;
    }
    getProductGroups();
  }, [getParamValue("categoryId")]);

  // Handle get product items depend on params
  useEffect(() => {
    if (location.search === "") {
      return;
    }
    getProducts();
  }, [params]);

  if (productGroups === null || products === null) {
    return <></>;
  }

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
