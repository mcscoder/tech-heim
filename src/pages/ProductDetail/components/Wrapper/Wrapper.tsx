interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="flex flex-col gap-12">{children}</div>;
};
