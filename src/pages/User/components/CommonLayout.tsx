export interface CommonLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const CommonLayout = ({
  title,
  description,
  children,
}: CommonLayoutProps) => {
  return (
    <section className="flex flex-col gap-10 flex-1">
      <div className="flex flex-col gap-2">
        <h5>{title}</h5>
        <p className="body-font-md text-gray-71">{description}</p>
      </div>
      <div className="grid grid-cols-2 gap-6">{children}</div>
    </section>
  );
};
