import { Wrapper } from "@/components/Layouts";
import {
  HeroSection,
  SaleSection,
  CategorySection,
  NewProductSection,
  BestSellerSection,
  TopBrandSection,
} from "./components";

export const Home = () => {
  return (
    <Wrapper className="gap-12 mb-10">
      <HeroSection />
      <CategorySection />
      <SaleSection />
      <NewProductSection />
      <BestSellerSection />
      <TopBrandSection />
    </Wrapper>
  );
};
