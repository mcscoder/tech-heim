import {
  HeroSection,
  SaleSection,
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
      <SaleSection />
      <NewProductSection />
      <BestSellersSection />
      <TopBrandsSection />
    </Wrapper>
  );
};
