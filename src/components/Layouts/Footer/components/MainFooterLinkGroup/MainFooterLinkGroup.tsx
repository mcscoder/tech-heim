import { Link } from "@/components/Elements";
import { LinkGroupObject } from "@/constants/AppPath";

interface MainFooterLinkGroupProps {
  footerLinkGroup: LinkGroupObject;
}

export const MainFooterLinkGroup = ({
  footerLinkGroup,
}: MainFooterLinkGroupProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h6 className="text-white">{footerLinkGroup.title}</h6>
      {footerLinkGroup.navigationLink.map((footerLink, index) => {
        return (
          <Link
            key={index}
            to={footerLink.path}
            startIcon={footerLink.startIcon}
            endIcon={footerLink.endIcon}
            className="text-[#CBCBCB] hover:text-white font-body-md duration-100"
            target={footerLink.target || ""}
          >
            {footerLink.label}
          </Link>
        );
      })}
    </div>
  );
};
