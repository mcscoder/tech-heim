import { Wrapper } from "@/components/Layouts";
import { Categories, MainProductSection } from "./components";

export const Product = () => {
  return (
    <Wrapper className="gap-12 py-10">
      <Categories />
      <MainProductSection />
    </Wrapper>
  );
};
