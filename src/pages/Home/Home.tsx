import { Hero, SalesSection, Wrapper } from "./components";
import { Categories } from "./components/Categories/Categories";

export const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Categories />
      <SalesSection />
    </Wrapper>
  );
};
