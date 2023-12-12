import { ProductCard } from "@/components/Elements";
import { CommonLayout } from ".";
import { useWishListContext } from "@/hooks";

export const WishList = () => {
  const { wishList } = useWishListContext();

  return (
    <CommonLayout
      title="Wish list"
      description="See your favorites list here"
      className="grid grid-cols-3 gap-6"
    >
      {wishList?.map((product, index) => {
        return (
          <ProductCard
            key={index}
            inWishList
            {...product}
          />
        );
      })}
    </CommonLayout>
  );
};
