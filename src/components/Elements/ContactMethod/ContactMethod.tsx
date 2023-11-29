export interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ContactMethod = ({
  icon,
  title,
  description,
}: ContactMethodProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <h5>{title}</h5>
      <p className="font-body-md text-gray-71">{description}</p>
    </div>
  );
};
