import { ProductCard, ProductCardApi } from "@/components/Elements";
import { CommonLayout } from ".";

const productList: ProductCardApi[] = [
  {
    id: 1,
    name: "Apple MacBook Air 15 Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
    lastPrice: 1410.87,
    currentPrice: 1299.0,
    rate: 4.9,
    imageURLs: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/1546/4624/347cf28ac318deff2a95d9f7c6e7df84?Expires=1702857600&Signature=bcLCgclsv7io0JZHkp6t7sS0hUSbRUstYWWkRVqjbIzkhdKifD1X-tTLpBDYt2is2N~l-ObarwcoFhkx4LvkoRb67GcbsjkkrhgjfQGuBNDFMYcnilV0GHdClBdHGtIKT6Hcfns6SRJKyfDZ~wyBbd40x0Ckt1uPJSLO3aQCHwFdkmkibJ87vxzU8LYZgdszr5SADHFjgW5bxIYPk2A25ad5TmgKlWzm51tJNMQwJi4siF1ar54CXXJd6qs-gV4c-pBu6huXWFp8FLgJ2~bMIyNbe4lGZ8mDIpDdH1m8Zlmal9-pNRZk-FtxJ0utCsBgly95SdLWhuSptzB9FbMUKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
  },
  {
    id: 2,
    name: "Apple MacBook Air 15 Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
    lastPrice: 1410.87,
    currentPrice: 1299.0,
    rate: 4.9,
    imageURLs: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/1546/4624/347cf28ac318deff2a95d9f7c6e7df84?Expires=1702857600&Signature=bcLCgclsv7io0JZHkp6t7sS0hUSbRUstYWWkRVqjbIzkhdKifD1X-tTLpBDYt2is2N~l-ObarwcoFhkx4LvkoRb67GcbsjkkrhgjfQGuBNDFMYcnilV0GHdClBdHGtIKT6Hcfns6SRJKyfDZ~wyBbd40x0Ckt1uPJSLO3aQCHwFdkmkibJ87vxzU8LYZgdszr5SADHFjgW5bxIYPk2A25ad5TmgKlWzm51tJNMQwJi4siF1ar54CXXJd6qs-gV4c-pBu6huXWFp8FLgJ2~bMIyNbe4lGZ8mDIpDdH1m8Zlmal9-pNRZk-FtxJ0utCsBgly95SdLWhuSptzB9FbMUKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
  },
  {
    id: 3,
    name: "Apple MacBook Air 15 Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
    lastPrice: 1410.87,
    currentPrice: 1299.0,
    rate: 4.9,
    imageURLs: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/1546/4624/347cf28ac318deff2a95d9f7c6e7df84?Expires=1702857600&Signature=bcLCgclsv7io0JZHkp6t7sS0hUSbRUstYWWkRVqjbIzkhdKifD1X-tTLpBDYt2is2N~l-ObarwcoFhkx4LvkoRb67GcbsjkkrhgjfQGuBNDFMYcnilV0GHdClBdHGtIKT6Hcfns6SRJKyfDZ~wyBbd40x0Ckt1uPJSLO3aQCHwFdkmkibJ87vxzU8LYZgdszr5SADHFjgW5bxIYPk2A25ad5TmgKlWzm51tJNMQwJi4siF1ar54CXXJd6qs-gV4c-pBu6huXWFp8FLgJ2~bMIyNbe4lGZ8mDIpDdH1m8Zlmal9-pNRZk-FtxJ0utCsBgly95SdLWhuSptzB9FbMUKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
  },
  {
    id: 4,
    name: "Apple MacBook Air 15 Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
    lastPrice: 1410.87,
    currentPrice: 1299.0,
    rate: 4.9,
    imageURLs: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/1546/4624/347cf28ac318deff2a95d9f7c6e7df84?Expires=1702857600&Signature=bcLCgclsv7io0JZHkp6t7sS0hUSbRUstYWWkRVqjbIzkhdKifD1X-tTLpBDYt2is2N~l-ObarwcoFhkx4LvkoRb67GcbsjkkrhgjfQGuBNDFMYcnilV0GHdClBdHGtIKT6Hcfns6SRJKyfDZ~wyBbd40x0Ckt1uPJSLO3aQCHwFdkmkibJ87vxzU8LYZgdszr5SADHFjgW5bxIYPk2A25ad5TmgKlWzm51tJNMQwJi4siF1ar54CXXJd6qs-gV4c-pBu6huXWFp8FLgJ2~bMIyNbe4lGZ8mDIpDdH1m8Zlmal9-pNRZk-FtxJ0utCsBgly95SdLWhuSptzB9FbMUKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
  },
  {
    id: 5,
    name: "Apple MacBook Air 15 Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
    lastPrice: 1410.87,
    currentPrice: 1299.0,
    rate: 4.9,
    imageURLs: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/1546/4624/347cf28ac318deff2a95d9f7c6e7df84?Expires=1702857600&Signature=bcLCgclsv7io0JZHkp6t7sS0hUSbRUstYWWkRVqjbIzkhdKifD1X-tTLpBDYt2is2N~l-ObarwcoFhkx4LvkoRb67GcbsjkkrhgjfQGuBNDFMYcnilV0GHdClBdHGtIKT6Hcfns6SRJKyfDZ~wyBbd40x0Ckt1uPJSLO3aQCHwFdkmkibJ87vxzU8LYZgdszr5SADHFjgW5bxIYPk2A25ad5TmgKlWzm51tJNMQwJi4siF1ar54CXXJd6qs-gV4c-pBu6huXWFp8FLgJ2~bMIyNbe4lGZ8mDIpDdH1m8Zlmal9-pNRZk-FtxJ0utCsBgly95SdLWhuSptzB9FbMUKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
  },
  {
    id: 6,
    name: "Apple MacBook Air 15 Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French",
    lastPrice: 1410.87,
    currentPrice: 1299.0,
    rate: 4.9,
    imageURLs: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/1546/4624/347cf28ac318deff2a95d9f7c6e7df84?Expires=1702857600&Signature=bcLCgclsv7io0JZHkp6t7sS0hUSbRUstYWWkRVqjbIzkhdKifD1X-tTLpBDYt2is2N~l-ObarwcoFhkx4LvkoRb67GcbsjkkrhgjfQGuBNDFMYcnilV0GHdClBdHGtIKT6Hcfns6SRJKyfDZ~wyBbd40x0Ckt1uPJSLO3aQCHwFdkmkibJ87vxzU8LYZgdszr5SADHFjgW5bxIYPk2A25ad5TmgKlWzm51tJNMQwJi4siF1ar54CXXJd6qs-gV4c-pBu6huXWFp8FLgJ2~bMIyNbe4lGZ8mDIpDdH1m8Zlmal9-pNRZk-FtxJ0utCsBgly95SdLWhuSptzB9FbMUKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
  },
];

export const WishList = () => {
  return (
    <CommonLayout
      title="Wish list"
      description="See your favorites list here"
      className="grid grid-cols-3 gap-6"
    >
      {productList.map((product, index) => {
        return (
          <ProductCard
            key={index}
            to={"#"}
            {...product}
          />
        );
      })}
    </CommonLayout>
  );
};
