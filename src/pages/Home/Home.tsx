import {
  HeroSection,
  SaleSection,
  Wrapper,
  CategorySection,
  NewProductSection,
  BestSellersSection,
  TopBrandSection,
} from "./components";

export const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
      <CategorySection />
      <SaleSection />
      <NewProductSection />
      <BestSellersSection />
      <TopBrandSection />
    </Wrapper>
  );
};
