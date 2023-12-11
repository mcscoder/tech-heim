import { StarIcon } from "@/constants";
import { IconText } from "..";
import { ProductTypes } from "@/types";

export const Comment = ({
  firstName,
  lastName,
  description,
}: ProductTypes.ProductComment) => {
  const commentClasses = `flex flex-col bg-gray-f9f rounded-lg p-4 gap-3`;

  return (
    <section className={commentClasses}>
      <div className="flex items-center justify-between">
        <h5>{`${firstName} ${lastName}`}</h5>
        <IconText
          startIcon={<StarIcon />}
          className="border rounded-lg px-2 py-1 border-Primary text-Primary"
        >
          {4}
        </IconText>
      </div>
      <p className="font-body-md">{description}</p>
    </section>
  );
};
