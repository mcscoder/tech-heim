import { Button } from "..";
import { useProductContext } from "@/hooks";

interface SidebarFilterProps {
  children: React.ReactNode;
}

export const SidebarFilter = ({ children }: SidebarFilterProps) => {
  const { setParams, clearProductType } = useProductContext();

  const handleClear = () => {
    setParams({ ...clearProductType() });
  };

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
