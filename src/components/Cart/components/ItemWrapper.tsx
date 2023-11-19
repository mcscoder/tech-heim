interface ItemWrapperProps {
  children?: React.ReactNode;
}

export const ItemWrapper = ({ children }: ItemWrapperProps) => {
  return (
    <div className="max-h-[550px] overflow-auto flex flex-col gap-3 px-8 py-2">
      {children}
    </div>
  );
};
