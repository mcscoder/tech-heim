import { ProductApi } from "@/api";
import {
  Chip,
  FilterGroup,
  ProductCard,
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
  const productTypeIds = useMemo(() => {
    return getParamValue(productContext.params, "productTypeId")?.split("-");
  }, [getParamValue(productContext.params, "productTypeId")]);

  //
  useEffect(() => {
    ProductApi.getProductGroup(location.search).then(
      (productGroups: ProductFilterProps[]) => {
        console.log(productGroups);
        setProductGroups(productGroups);
      }
    );
  }, [getParamValue(productContext.params, "categoryId")]);

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
          <ProductCard
            to={"#"}
            title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
            imgURL="http://mcsmuscle.ddns.net/product-sales/2.jpeg"
            lastPrice={40}
            currentPrice={34.3}
            rate={4.5}
          />
          <ProductCard
            to={"#"}
            title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
            imgURL="http://mcsmuscle.ddns.net/product-sales/2.jpeg"
            lastPrice={40}
            currentPrice={34.3}
            rate={4.5}
          />
          <ProductCard
            to={"#"}
            title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
            imgURL="http://mcsmuscle.ddns.net/product-sales/2.jpeg"
            lastPrice={40}
            currentPrice={34.3}
            rate={4.5}
          />
          <ProductCard
            to={"#"}
            title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
            imgURL="http://mcsmuscle.ddns.net/product-sales/2.jpeg"
            lastPrice={40}
            currentPrice={34.3}
            rate={4.5}
          />
          <ProductCard
            to={"#"}
            title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
            imgURL="http://mcsmuscle.ddns.net/product-sales/2.jpeg"
            lastPrice={40}
            currentPrice={34.3}
            rate={4.5}
          />
          <ProductCard
            to={"#"}
            title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
            imgURL="http://mcsmuscle.ddns.net/product-sales/2.jpeg"
            lastPrice={40}
            currentPrice={34.3}
            rate={4.5}
          />
          <ProductCard
            to={"#"}
            title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
            imgURL="http://mcsmuscle.ddns.net/product-sales/2.jpeg"
            lastPrice={40}
            currentPrice={34.3}
            rate={4.5}
          />
          <ProductCard
            to={"#"}
            title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
            imgURL="http://mcsmuscle.ddns.net/product-sales/2.jpeg"
            lastPrice={40}
            currentPrice={34.3}
            rate={4.5}
          />
          <ProductCard
            to={"#"}
            title="NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design"
            imgURL="http://mcsmuscle.ddns.net/product-sales/2.jpeg"
            lastPrice={40}
            currentPrice={34.3}
            rate={4.5}
          />
        </ProductGridWrapper>
      </div>
    </section>
  );
};
