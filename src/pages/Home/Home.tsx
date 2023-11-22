import {
  Hero,
  SalesSection,
  Wrapper,
  Categories,
  NewProducts,
  BestSellersSection,
} from "./components";

export const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Categories />
      <SalesSection />
      <NewProducts />
      <BestSellersSection />
    </Wrapper>
  );
};
