import { Button } from "@/components/Elements";
import { SearchIcon } from "@/constants";

export const SearchButton = () => {
  return (
    <Button
      variant="onlyIcon"
      startIcon={<SearchIcon />}
    />
  );
};
