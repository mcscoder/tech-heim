import { ProductCard, SectionTitle } from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";
import { ArrowRightIcon } from "@/constants";

export const BestSellersSection = () => {
  return (
    <section className="content-container flex flex-col gap-8">
      <SectionTitle
        title="Best Sellers"
        linkIcon={<ArrowRightIcon />}
        linkLabel="View all"
      />
      <ProductGridWrapper>
        <ProductCard
          to="#"
          imgURL="https://s3-alpha-sig.figma.com/img/2d0d/3636/7d682a77f57cd368a185a2f1c80ae2ce?Expires=1701648000&Signature=a39gZ97O4zqH9jzAJe4YzpVICyj7RYGqh2Rz8Y~wtH7zX4c4C5xUeEj9hsZyVBgHn65jxNymSJfeTyvVUuSrJuWJ4X4i4al3yyq7vFQYgkWzMROy6Wxz8nuB-pVkr-nvTvYKfU1psE4CMCT7e7Eed3B2r0pPh1jLiqztwwOD93uY8Mtm1w1LqPGYB2OZMOh0B~XB--EpGQtof0Gvt1plf6WPeOEVALbFMzqk9m~1v0FtrfTWnYb2~beSxUbJAPo5hUu5-KmUTvdb~dfU2mDVzh0I2h7pZji05M-l3Be2opBVfalHjePmRZt0pghxG4drq7kHdfJx~LjfEn0ttRlA7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Iphone 14 promax 256 gig Iphone 14 promax 256 gig Iphone 14 promax 256 gig Iphone 14 promax 256 gig Iphone 14 promax 256 gig"
          lastPrice={1000.3}
          currentPrice={930.9}
          rate={4.5}
        />
        <ProductCard
          to="#"
          imgURL="https://s3-alpha-sig.figma.com/img/2d0d/3636/7d682a77f57cd368a185a2f1c80ae2ce?Expires=1701648000&Signature=a39gZ97O4zqH9jzAJe4YzpVICyj7RYGqh2Rz8Y~wtH7zX4c4C5xUeEj9hsZyVBgHn65jxNymSJfeTyvVUuSrJuWJ4X4i4al3yyq7vFQYgkWzMROy6Wxz8nuB-pVkr-nvTvYKfU1psE4CMCT7e7Eed3B2r0pPh1jLiqztwwOD93uY8Mtm1w1LqPGYB2OZMOh0B~XB--EpGQtof0Gvt1plf6WPeOEVALbFMzqk9m~1v0FtrfTWnYb2~beSxUbJAPo5hUu5-KmUTvdb~dfU2mDVzh0I2h7pZji05M-l3Be2opBVfalHjePmRZt0pghxG4drq7kHdfJx~LjfEn0ttRlA7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Iphone 14 promax 256 gig"
          currentPrice={930.9}
          rate={4.5}
        />
        <ProductCard
          to="#"
          imgURL="https://s3-alpha-sig.figma.com/img/2d0d/3636/7d682a77f57cd368a185a2f1c80ae2ce?Expires=1701648000&Signature=a39gZ97O4zqH9jzAJe4YzpVICyj7RYGqh2Rz8Y~wtH7zX4c4C5xUeEj9hsZyVBgHn65jxNymSJfeTyvVUuSrJuWJ4X4i4al3yyq7vFQYgkWzMROy6Wxz8nuB-pVkr-nvTvYKfU1psE4CMCT7e7Eed3B2r0pPh1jLiqztwwOD93uY8Mtm1w1LqPGYB2OZMOh0B~XB--EpGQtof0Gvt1plf6WPeOEVALbFMzqk9m~1v0FtrfTWnYb2~beSxUbJAPo5hUu5-KmUTvdb~dfU2mDVzh0I2h7pZji05M-l3Be2opBVfalHjePmRZt0pghxG4drq7kHdfJx~LjfEn0ttRlA7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Iphone 14 promax 256 gig"
          currentPrice={930.9}
          rate={4.5}
        />
        <ProductCard
          to="#"
          imgURL="https://s3-alpha-sig.figma.com/img/2d0d/3636/7d682a77f57cd368a185a2f1c80ae2ce?Expires=1701648000&Signature=a39gZ97O4zqH9jzAJe4YzpVICyj7RYGqh2Rz8Y~wtH7zX4c4C5xUeEj9hsZyVBgHn65jxNymSJfeTyvVUuSrJuWJ4X4i4al3yyq7vFQYgkWzMROy6Wxz8nuB-pVkr-nvTvYKfU1psE4CMCT7e7Eed3B2r0pPh1jLiqztwwOD93uY8Mtm1w1LqPGYB2OZMOh0B~XB--EpGQtof0Gvt1plf6WPeOEVALbFMzqk9m~1v0FtrfTWnYb2~beSxUbJAPo5hUu5-KmUTvdb~dfU2mDVzh0I2h7pZji05M-l3Be2opBVfalHjePmRZt0pghxG4drq7kHdfJx~LjfEn0ttRlA7w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Iphone 14 promax 256 gig"
          currentPrice={930.9}
          rate={4.5}
        />
      </ProductGridWrapper>
    </section>
  );
};
