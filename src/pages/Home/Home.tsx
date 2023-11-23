import {
  HeroSection,
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
      <HeroSection />
      <CategorySection />
      <SalesSection />
      <NewProductSection />
      <BestSellersSection />
      <TopBrandsSection />
    </Wrapper>
  );
};
