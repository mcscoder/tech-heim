import {
  Hero,
  SalesSection,
  Wrapper,
  CategorySection,
  NewProductSection,
  BestSellersSection,
  TopBrandsSection,
} from "./components";

export const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <CategorySection />
      <SalesSection />
      <NewProductSection />
      <BestSellersSection />
      <TopBrandsSection />
    </Wrapper>
  );
};
