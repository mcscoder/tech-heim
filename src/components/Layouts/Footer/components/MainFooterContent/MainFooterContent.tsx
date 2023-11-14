import { footerLinkGroups } from "@/constants";
import { MainFooterLinkGroup, MainFooterMisc } from "..";

interface MainFooterContentProps {
  className?: string;
}

export const MainFooterContent = ({
  className = "",
}: MainFooterContentProps) => {
  const mainFooterContentClasses = `content-container grid grid-cols-[auto_auto_auto_auto] gap-6 ${className}`;
  return (
    <div className={mainFooterContentClasses}>
      {footerLinkGroups.map((footerLinkGroup, index) => {
        return (
          <MainFooterLinkGroup
            key={index}
            footerLinkGroup={footerLinkGroup}
          />
        );
      })}
      <MainFooterMisc />
    </div>
  );
};
