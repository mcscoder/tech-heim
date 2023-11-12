interface UserFeatureProps {
  children: React.ReactNode;
}

export const UserFeature = ({ children }: UserFeatureProps) => {
  return (
    <div className="flex items-center justify-center gap-2">{children}</div>
  );
};
