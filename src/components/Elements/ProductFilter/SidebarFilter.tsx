import { Button } from "..";

interface SidebarFilterProps {
  children: React.ReactNode;
  handleClear?: () => void;
}

export const SidebarFilter = ({
  children,
  handleClear,
}: SidebarFilterProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-4">
        <h5>Filters</h5>
        <Button
          variant={"text"}
          onClick={handleClear}
        >
          Clear all
        </Button>
      </div>
      {children}
    </div>
  );
};
