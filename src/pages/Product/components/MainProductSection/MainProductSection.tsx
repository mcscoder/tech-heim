import { FilterGroup, ProductCard, SidebarFilter } from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";

export const MainProductSection = () => {
  return (
    <section className="content-container flex gap-6">
      <SidebarFilter>
        <FilterGroup
          title="Brand"
          filters={[
            { label: "Asus" },
            { label: "Acer" },
            { label: "Apple" },
            { label: "Dell" },
          ]}
        />
        <FilterGroup
          title="Brand"
          filters={[
            { label: "Asus" },
            { label: "Acer" },
            { label: "Apple" },
            { label: "Dell" },
          ]}
        />
        <FilterGroup
          title="Brand"
          filters={[
            { label: "Asus" },
            { label: "Acer" },
            { label: "Apple" },
            { label: "Dell" },
          ]}
        />
        <FilterGroup
          title="Brand"
          filters={[
            { label: "Asus" },
            { label: "Acer" },
            { label: "Apple" },
            { label: "Dell" },
          ]}
        />
        <FilterGroup
          title="Brand"
          filters={[
            { label: "Asus" },
            { label: "Acer" },
            { label: "Apple" },
            { label: "Dell" },
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
