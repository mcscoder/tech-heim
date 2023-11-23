import React from "react";
import { Link } from "..";

interface SectionTitleProps {
  title: string;
  path?: string;
  linkLabel?: string;
  linkIcon?: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({
  title,
  path,
  linkLabel,
  linkIcon,
  className = "",
}: SectionTitleProps) => {
  const sectionTitleClasses = `flex items-center justify-between border-b-[2px] border-b-gray-b4 pb-4 ${className}`;

  return (
    <div className={sectionTitleClasses}>
      <h3>{title}</h3>
      {(linkIcon || linkLabel) && (
        <Link
          to={path}
          {...(linkIcon && { endIcon: linkIcon })}
          className="font-button-lg hover:text-Primary duration-100"
        >
          {linkLabel && linkLabel}
        </Link>
      )}
    </div>
  );
};
