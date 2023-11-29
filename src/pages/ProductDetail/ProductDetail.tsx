import { Wrapper } from "@/components/Layouts";
import {
  CommentSection,
  OverViewSection,
  SimilarProductSection,
  TechnicalDetailSection,
} from "./components";

export const ProductDetail = () => {
  // const { productId } = useParams();

  return (
    <Wrapper className="gap-12">
      <OverViewSection />
      <TechnicalDetailSection />
      <SimilarProductSection />
      <CommentSection />
    </Wrapper>
  );
};
