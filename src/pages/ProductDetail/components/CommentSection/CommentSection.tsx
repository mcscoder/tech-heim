import { Comment, CommentField } from "@/components/Elements";
import { useProductDetailContext } from "@/hooks";

export const CommentSection = () => {
  const { productDetail } = useProductDetailContext();

  return (
    <section className="content-container flex flex-col mb-12">
      <h5>Comments</h5>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6 flex-1">
          <p className="font-body-lg">
            Leave your comments here for other customers
          </p>
          <CommentField />
        </div>
        <div className="flex flex-col gap-4 flex-[3]">
          {productDetail.productComment ? (
            productDetail.productComment.map((comment, index) => (
              <Comment
                key={index}
                {...comment}
              />
            ))
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="font-body-xl text-gray-71">No comments yet</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
