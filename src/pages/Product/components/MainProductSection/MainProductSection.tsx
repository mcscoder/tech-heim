import {
  Button,
  Chip,
  FilterGroup,
  ProductCard,
  SidebarFilter,
} from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";
import { useItemsPerPage, useProductContext } from "@/hooks";
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

  const {
    itemsPerPage,
    updateItemsPerPage,
    increaseItemsPerPage,
    isItemsPerPageMaximized,
  } = useItemsPerPage(6, products?.length);

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

  useEffect(() => {
    updateItemsPerPage(6, products?.length);
  }, [products]);

  if (productGroups === null) {
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
        {products && (
          <div className="flex flex-col flex-1 gap-24">
            <ProductGridWrapper>
              {products?.slice(0, itemsPerPage).map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    {...product}
                  />
                );
              })}
            </ProductGridWrapper>
            <div className="flex justify-center">
              <Button
                variant="outlined"
                onClick={() => increaseItemsPerPage(6)}
                disabled={isItemsPerPageMaximized()}
                className="px-12"
              >
                More
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
