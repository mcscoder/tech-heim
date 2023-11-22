import { getRequest } from "@/api";
import {
  ProductCard,
  ProductCardApi,
  SectionTitle,
} from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";
import { ArrowRightIcon, productRoute } from "@/constants";
import { useEffect, useState } from "react";

export const BestSellersSection = () => {
  const [bestSellerProduct, setBestSellerProduct] = useState<
    ProductCardApi[] | null
  >(null);

  useEffect(() => {
    getRequest("productBestSellers", "").then((data: ProductCardApi[]) => {
      setBestSellerProduct(data);
    });
  }, []);

  if (bestSellerProduct === null) {
    return;
  }

  return (
    <section className="content-container flex flex-col gap-8">
      <SectionTitle
        title="Best Sellers"
        linkIcon={<ArrowRightIcon />}
        linkLabel="View all"
      />
      <ProductGridWrapper>
        {bestSellerProduct.map((product) => {
          return (
            <ProductCard
              key={product.id}
              to={productRoute(`${product.id}`)}
              title={product.title}
              imgURL={product.imgURL}
              lastPrice={product.lastPrice}
              currentPrice={product.currentPrice}
              rate={product.rate}
            />
          );
        })}
      </ProductGridWrapper>
    </section>
  );
};
