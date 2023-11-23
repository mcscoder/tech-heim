import {
  HeroSection,
  SaleSection,
  Wrapper,
  CategorySection,
  NewProductSection,
  BestSellerSection,
  TopBrandSection,
} from "./components";

export const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
      <CategorySection />
      <SaleSection />
      <NewProductSection />
      <BestSellerSection />
      <TopBrandSection />
    </Wrapper>
  );
};
