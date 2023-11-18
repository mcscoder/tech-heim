import { SearchIcon, searchSuggestItems } from "@/constants";
import { Form, Input } from "../Elements";
import { Overlay } from "../Layouts";
import { SearchSuggest } from "./components";

interface SearchModalProps {
  onClick?: () => void;
}

export const SearchModal = ({ onClick }: SearchModalProps) => {
  return (
    <Overlay
      className="flex items-center justify-center"
      onClick={onClick}
    >
      <div className="px-12 py-8 w-[800px] h-[500px] bg-white rounded-lg flex flex-col gap-12">
        <Form>
          <Input
            placeholder="What can we help you to find ?"
            endIcon={<SearchIcon />}
          />
        </Form>
        <div className="flex gap-16">
          {searchSuggestItems.map((item, index) => {
            return (
              <SearchSuggest
                key={index}
                searchSuggestItem={item}
              />
            );
          })}
        </div>
      </div>
    </Overlay>
  );
};
