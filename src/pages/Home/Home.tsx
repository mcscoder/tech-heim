import {
  Hero,
  SalesSection,
  Wrapper,
  Categories,
  NewProducts,
  BestSellersSection,
  TopBrandsSection,
} from "./components";

export const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Categories />
      <SalesSection />
      <NewProducts />
      <BestSellersSection />
      <TopBrandsSection />
    </Wrapper>
  );
};
