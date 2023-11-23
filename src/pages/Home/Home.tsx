import {
  Hero,
  SalesSection,
  Wrapper,
  CategorySection,
  NewProducts,
  BestSellersSection,
  TopBrandsSection,
} from "./components";

export const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <CategorySection />
      <SalesSection />
      <NewProducts />
      <BestSellersSection />
      <TopBrandsSection />
    </Wrapper>
  );
};
