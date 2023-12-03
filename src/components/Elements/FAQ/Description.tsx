export interface DescriptionProps {
  description: string;
}

export const Description = ({ description }: DescriptionProps) => {
  return <p className="font-body-xl">{description}</p>;
};
