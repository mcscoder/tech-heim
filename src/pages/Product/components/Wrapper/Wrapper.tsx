export interface ProductWrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: ProductWrapperProps) => {
  return <div className="flex flex-col gap-12 py-10">{children}</div>;
};
