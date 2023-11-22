import {
  Hero,
  SalesSection,
  Wrapper,
  Categories,
  NewProducts,
} from "./components";

export const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Categories />
      <SalesSection />
      <NewProducts />
    </Wrapper>
  );
};
