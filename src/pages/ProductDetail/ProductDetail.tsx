import {
  CommentSection,
  OverViewSection,
  SimilarProductSection,
  TechnicalDetailSection,
  Wrapper,
} from "./components";

export const ProductDetail = () => {
  // const { productId } = useParams();

  return (
    <Wrapper>
      <OverViewSection />
      <TechnicalDetailSection />
      <SimilarProductSection />
      <CommentSection />
    </Wrapper>
  );
};
