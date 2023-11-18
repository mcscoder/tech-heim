import { Link } from "@/components/Elements";
import { LinkGroupObject } from "@/constants";

interface SearchSuggestProps {
  searchSuggestItem: LinkGroupObject;
}

export const SearchSuggest = ({ searchSuggestItem }: SearchSuggestProps) => {
  return (
    <div className="flex flex-col gap-10">
      <h5>{searchSuggestItem.title}</h5>
      <div className="grid grid-cols-[auto_auto] gap-8">
        {searchSuggestItem.navigationLink.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.path}
              className="font-body-lg hover:text-Primary duration-100"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
