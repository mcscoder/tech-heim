import { Button } from "@/components/Elements";
import { SearchModal } from "@/components/SearchModal";
import { SearchIcon } from "@/constants";
import { useState } from "react";

export const SearchButton = () => {
  const [searchModal, setSearchModal] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="onlyIcon"
        startIcon={<SearchIcon />}
        onClick={() => setSearchModal(true)}
      />
      {searchModal && <SearchModal onClick={() => setSearchModal(false)} />}
    </>
  );
};
