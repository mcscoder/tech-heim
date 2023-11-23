import { getRequest } from "@/api";
import { Category } from "@/components/Elements";
import { productCategoryRoute } from "@/constants";
import { useEffect, useState } from "react";

export interface HomeCategoriesApi {
  id: number;
  category: string;
  imgURL: string;
}

export const CategorySection = () => {
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
    <section className="content-container flex justify-between my-2">
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            to={productCategoryRoute(`${category.id}`)}
            category={category.category}
            imgURL={category.imgURL}
          />
        );
      })}
    </section>
  );
};
