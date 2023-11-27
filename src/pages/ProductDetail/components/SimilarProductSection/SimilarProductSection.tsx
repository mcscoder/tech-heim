import { ProductCard } from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";

const productList = [
  {
    title: "Apple 2022 MacBook Pro Laptop with M2 chip 14-inch",
    imgURL:
      "https://s3-alpha-sig.figma.com/img/1fcd/36c3/3985708556a86f4cc5c672a8ca34e7a3?Expires=1702252800&Signature=B5fh~qYZV-NyGr7R40xi2MGk1OVKdWNXqnKkLgLeOk8rkBZ~hUVD1dsZCT0lAkxPjwdVkZurYxjEcGwns96mMlt2nARj5YwlEddBtHReOi7AoQwC3QFyVTwnvyso2UoWlEl~EhtfnLCMt3lbUWFYtBFBqrRA8TpInrdSXMkduFGfBvt1FuZ6hJSnkm5RcZJBWCnUzYSj9wVsf~ID-s5Hs13NSliM~OjrEw7vsi5-yyrRWu3FqjA-XnOqIzhFFf-FWgBBjYHzrPkltR~NXYCJ7XB3rbSxksdKVKquCFRXO-MwyBPM848dep8SDW-fibaOYyRd8i3sciyUZ8NIZu-Cbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    currentPrice: 109900,
    rate: 4.7,
  },
  {
    title: "Apple 2022 MacBook Air Laptop with M2 chip",
    imgURL:
      "https://s3-alpha-sig.figma.com/img/1fcd/36c3/3985708556a86f4cc5c672a8ca34e7a3?Expires=1702252800&Signature=B5fh~qYZV-NyGr7R40xi2MGk1OVKdWNXqnKkLgLeOk8rkBZ~hUVD1dsZCT0lAkxPjwdVkZurYxjEcGwns96mMlt2nARj5YwlEddBtHReOi7AoQwC3QFyVTwnvyso2UoWlEl~EhtfnLCMt3lbUWFYtBFBqrRA8TpInrdSXMkduFGfBvt1FuZ6hJSnkm5RcZJBWCnUzYSj9wVsf~ID-s5Hs13NSliM~OjrEw7vsi5-yyrRWu3FqjA-XnOqIzhFFf-FWgBBjYHzrPkltR~NXYCJ7XB3rbSxksdKVKquCFRXO-MwyBPM848dep8SDW-fibaOYyRd8i3sciyUZ8NIZu-Cbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    currentPrice: 199900,
    rate: 4.7,
  },
  {
    title: "Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch",
    imgURL:
      "https://s3-alpha-sig.figma.com/img/1fcd/36c3/3985708556a86f4cc5c672a8ca34e7a3?Expires=1702252800&Signature=B5fh~qYZV-NyGr7R40xi2MGk1OVKdWNXqnKkLgLeOk8rkBZ~hUVD1dsZCT0lAkxPjwdVkZurYxjEcGwns96mMlt2nARj5YwlEddBtHReOi7AoQwC3QFyVTwnvyso2UoWlEl~EhtfnLCMt3lbUWFYtBFBqrRA8TpInrdSXMkduFGfBvt1FuZ6hJSnkm5RcZJBWCnUzYSj9wVsf~ID-s5Hs13NSliM~OjrEw7vsi5-yyrRWu3FqjA-XnOqIzhFFf-FWgBBjYHzrPkltR~NXYCJ7XB3rbSxksdKVKquCFRXO-MwyBPM848dep8SDW-fibaOYyRd8i3sciyUZ8NIZu-Cbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    currentPrice: 139900,
    rate: 4.7,
  },
  {
    title: "Apple 2022 MacBook Air Laptop with M2 chip",
    imgURL:
      "https://s3-alpha-sig.figma.com/img/1fcd/36c3/3985708556a86f4cc5c672a8ca34e7a3?Expires=1702252800&Signature=B5fh~qYZV-NyGr7R40xi2MGk1OVKdWNXqnKkLgLeOk8rkBZ~hUVD1dsZCT0lAkxPjwdVkZurYxjEcGwns96mMlt2nARj5YwlEddBtHReOi7AoQwC3QFyVTwnvyso2UoWlEl~EhtfnLCMt3lbUWFYtBFBqrRA8TpInrdSXMkduFGfBvt1FuZ6hJSnkm5RcZJBWCnUzYSj9wVsf~ID-s5Hs13NSliM~OjrEw7vsi5-yyrRWu3FqjA-XnOqIzhFFf-FWgBBjYHzrPkltR~NXYCJ7XB3rbSxksdKVKquCFRXO-MwyBPM848dep8SDW-fibaOYyRd8i3sciyUZ8NIZu-Cbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    currentPrice: 129900,
    rate: 4.7,
  },
];

export const SimilarProductSection = () => {
  return (
    <section className="content-container flex flex-col gap-6">
      <h5>Similar Product</h5>
      <ProductGridWrapper className="gap-6">
        {productList.map((item, index) => {
          return (
            <ProductCard
              to={"#"}
              key={index}
              title={item.title}
              lastPrice={undefined}
              currentPrice={item.currentPrice}
              imgURL={item.imgURL}
              rate={item.rate}
            />
          );
        })}
      </ProductGridWrapper>
    </section>
  );
};
