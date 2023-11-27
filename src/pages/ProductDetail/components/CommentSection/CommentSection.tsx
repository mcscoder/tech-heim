import { Comment, CommentField, CommentProps } from "@/components/Elements";

const commentsData: CommentProps[] = [
  {
    username: "Alice Johnson",
    rate: 4,
    description:
      "This is a great product! I really liked it. The quality is outstanding, and it exceeded my expectations. The packaging was also excellent, ensuring that the product arrived in perfect condition.",
  },
  {
    username: "Bob Smith",
    rate: 5,
    description:
      "Excellent service and fast delivery. I ordered this product, and it arrived sooner than I expected. The customer service was responsive and helpful. Overall, a very positive experience.",
  },
  {
    username: "Charlie Brown",
    rate: 3,
    description:
      "Good quality but a bit expensive. The product itself is of good quality, and I'm satisfied with its performance. However, I find the price to be on the higher side compared to similar products in the market.",
  },
  // Add more comments as needed
];

export const CommentSection = () => {
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
          {commentsData.map((comment, index) => (
            <Comment
              key={index}
              {...comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
