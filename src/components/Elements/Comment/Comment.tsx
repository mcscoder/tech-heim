import { StarIcon } from "@/constants";
import { IconText } from "..";

export interface CommentProps {
  username: string;
  rate: number;
  description: string;
  className?: string;
}

export const Comment = ({
  username,
  rate,
  description,
  className = "",
}: CommentProps) => {
  const commentClasses = `flex flex-col bg-gray-f9f rounded-lg p-4 gap-3 ${className}`;

  return (
    <section className={commentClasses}>
      <div className="flex items-center justify-between">
        <h5>{username}</h5>
        <IconText
          startIcon={<StarIcon />}
          className="border rounded-lg px-2 py-1 border-Primary text-Primary"
        >
          {rate}
        </IconText>
      </div>
      <p className="font-body-md">{description}</p>
    </section>
  );
};
