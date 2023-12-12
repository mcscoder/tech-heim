import { SectionTitle } from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";
import { ArrowRightIcon } from "@/constants";

export const BestSellerSection = () => {
  // const [bestSellerProduct, setBestSellerProduct] = useState<
  //   ProductTypes.ProductCardResponseType[] | null
  // >(null);

  // useEffect(() => {
  //   getRequest("productBestSellers", "").then((data: ProductCardApi[]) => {
  //     setBestSellerProduct(data);
  //   });
  // }, []);

  // if (bestSellerProduct === null) {
  //   return;
  // }

  return (
    <section className="content-container flex flex-col gap-8">
      <SectionTitle
        title="Best Sellers"
        linkIcon={<ArrowRightIcon />}
        linkLabel="View all"
      />
      <ProductGridWrapper>
        <div></div>
        {/* {bestSellerProduct.map((product) => {
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
        })} */}
      </ProductGridWrapper>
    </section>
  );
};
