import { useState } from "react";
import { Description, DescriptionProps, Title, TitleProps } from ".";

export type QuestionProps = Pick<TitleProps, "title"> & DescriptionProps;

export const Question = ({ title, description }: QuestionProps) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="flex flex-col px-4 py-6 gap-8 border-b">
      <Title
        title={title}
        isExpanded={isExpanded}
        onClick={setExpanded}
      />
      {isExpanded && <Description description={description} />}
    </div>
  );
};
