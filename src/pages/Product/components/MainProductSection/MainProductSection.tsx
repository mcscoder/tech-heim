import { ProductApi } from "@/api";
import {
  FilterGroup,
  ProductCard,
  ProductFilterProps,
  SidebarFilter,
} from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";
import { ProductContext } from "@/contexts/Product";
import { getParamValue, urlQuery } from "@/utils";
import { useContext, useEffect, useState } from "react";

export const MainProductSection = () => {
  const productContext = useContext(ProductContext);
  const [productGroups, setProductGroups] = useState<
    ProductFilterProps[] | null
  >(null);

  //
  useEffect(() => {
    ProductApi.getProductGroup(urlQuery).then(
      (productGroups: ProductFilterProps[]) => {
        console.log(productGroups);
        setProductGroups(productGroups);
      }
    );
  }, [getParamValue(productContext.params, "categoryId")]);

  return (
    <section className="content-container flex gap-6">
      <SidebarFilter>
        {productGroups?.map((productGroup, index) => {
          return (
            <FilterGroup
              key={index}
              {...productGroup}
            />
          );
        })}
        <FilterGroup
          id={1}
          title="Brand"
          productType={[
            { id: 1, title: "Asus" },
            { id: 2, title: "Acer" },
            { id: 3, title: "Apple" },
            { id: 4, title: "Dell" },
          ]}
        />
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
    </section>
  );
};
