import { Button, ProductCard, SectionTitle } from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";
import { ArrowRightIcon } from "@/constants";
import { useHomeProductState, useItemsPerPage } from "@/hooks";
import { useEffect } from "react";
export const BestSellerSection = () => {
  const { products, getBestSellerProducts } = useHomeProductState();

  const { itemsPerPage, increaseItemsPerPage, isItemsPerPageMaximized } =
    useItemsPerPage(4, products?.length);

  useEffect(() => {
    getBestSellerProducts();
  }, []);

  return (
    <section className="content-container flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        <SectionTitle
          title="Best Sellers"
          linkIcon={<ArrowRightIcon />}
          linkLabel="View all"
        />
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
      </div>
      <div className="flex justify-center">
        <Button
          variant="outlined"
          onClick={() => increaseItemsPerPage(4)}
          disabled={isItemsPerPageMaximized()}
          className="px-12"
        >
          More
        </Button>
      </div>
    </section>
  );
};
