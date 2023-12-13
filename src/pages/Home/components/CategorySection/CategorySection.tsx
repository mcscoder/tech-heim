export interface HomeCategoriesApi {
  id: number;
  category: string;
  imgURL: string;
}

export const CategorySection = () => {
  return (
    <section className="content-container flex justify-between my-2">
      {/* {categories.map((category) => {
        return (
          <Category
            key={category.id}
            to={productCategoryRoute(`${category.id}`)}
            category={category.category}
            imgURL={category.imgURL}
          />
        );
      })} */}
    </section>
  );
};
