import { Link, LinkProps } from "react-router-dom";

type CategoryProps = LinkProps & {
  imgURL: string;
  category: string;
};

export const Category = ({
  imgURL,
  category,
  to,
  className = "",
  ...props
}: CategoryProps) => {
  const categoryClasses = `group inline-flex flex-col items-center gap-2 bg-white rounded-lg shadow-1 hover:shadow-2 hover:scale-105 duration-100 px-4 py-2 ${className}`;

  return (
    <Link
      to={to}
      className={categoryClasses}
      {...props}
    >
      <div className="max-w-[150px]">
        <img
          src={imgURL}
          alt={category}
        />
      </div>
      <p className="font-body-md text-gray-d2d group-hover:text-Secondary duration-100">
        {category}
      </p>
    </Link>
  );
};
