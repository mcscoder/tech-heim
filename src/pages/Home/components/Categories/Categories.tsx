import { getRequest } from "@/api";
import { Category } from "@/components/Elements";
import { productCategoryRoute } from "@/constants";
import { useEffect, useState } from "react";

export interface HomeCategoriesApi {
  id: number;
  category: string;
  imgURL: string;
}

export const Categories = () => {
  const [categories, setCategories] = useState<HomeCategoriesApi[] | null>(
    null
  );

  useEffect(() => {
    getRequest("homeCategories", "").then((data: HomeCategoriesApi[]) => {
      setCategories(data);
    });
  }, []);

  if (categories === null) {
    return;
  }

  return (
    <div className="content-container flex justify-between my-2">
      {categories.map((item, index) => {
        return (
          <Category
            key={index}
            to={productCategoryRoute(`${item.id}`)}
            category={item.category}
            imgURL={item.imgURL}
          />
        );
      })}
    </div>
  );
};
