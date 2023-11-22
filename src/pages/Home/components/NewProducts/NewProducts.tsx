import { getRequest } from "@/api";
import {
  ProductCard,
  ProductCardApi,
  SectionTitle,
} from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";
import { ArrowRightIcon, productRoute } from "@/constants";
import { useEffect, useState } from "react";

export const NewProducts = () => {
  const [newProducts, setNewProducts] = useState<ProductCardApi[] | null>(null);

  useEffect(() => {
    getRequest("productNews", "").then((data: ProductCardApi[]) => {
      setNewProducts(data);
    });
  }, []);

  if (newProducts === null) {
    return;
  }

  return (
    <div className="content-container flex flex-col gap-8">
      <SectionTitle
        title="New Products"
        linkIcon={<ArrowRightIcon />}
        linkLabel="View all"
      />
      <ProductGridWrapper>
        {newProducts.map((product) => {
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
    </div>
  );
};
