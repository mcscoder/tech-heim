import { useContext } from "react";
import { Button } from "..";
import { ProductContext } from "@/contexts/Product";
import { clearProductType } from "@/utils";

interface SidebarFilterProps {
  children: React.ReactNode;
}

export const SidebarFilter = ({ children }: SidebarFilterProps) => {
  const productContext = useContext(ProductContext);

  const handleClear = () => {
    productContext.setParams({ ...clearProductType(productContext.params) });
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
