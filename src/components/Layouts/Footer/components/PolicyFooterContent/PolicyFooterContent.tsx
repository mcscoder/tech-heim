import { Link } from "@/components/Elements";
import { CopyrightIcon, policyLinks } from "@/constants";

export const PolicyFooterContent = () => {
  return (
    <div className="content-container flex items-center justify-between">
      <p className="flex items-center">
        <CopyrightIcon />
        <span className="font-mobile-caption text-gray-cb ml-2">
          2023 Tech Heim.
        </span>
      </p>
      <div className="flex items-center justify-center gap-8">
        {policyLinks.map((policyLink, index) => {
          return (
            <Link
              key={index}
              to={policyLink.path}
              className="font-mobile-caption text-gray-cb hover:text-white duration-100"
            >
              {policyLink.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
