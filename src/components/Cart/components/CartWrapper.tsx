interface CartWrapperProps {
  children?: React.ReactNode;
}

export const CartWrapper = ({ children }: CartWrapperProps) => {
  return <div className="flex flex-col gap-3 py-6">{children}</div>;
};
