import { StarIcon } from "@/constants";
import { Link, LinkProps } from "react-router-dom";
import { IconText } from "..";
import { formatUSD } from "@/utils";

type ProductCardProps = LinkProps & {
  imgURL: string;
  title: string;
  lastPrice?: number;
  currentPrice: number;
  rate: number;
};

export const ProductCard = ({
  imgURL,
  title,
  lastPrice,
  currentPrice,
  rate,
  to,
}: ProductCardProps) => {
  return (
    <Link
      to={to}
      className="max-w-[280px] group p-4 bg-white rounded-lg shadow-1"
    >
      <div className="flex flex-col gap-4">
        <div className="border-b border-b-Primary pb-4">
          <img
            // src="https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1701648000&Signature=BNm3P2ciQV6m2ODpeSx2WwO--QuV~~vjWwJoBkZvZQWxnHCL0RkRf-fJhh-k0izdITKhP4XFksBgmLc1I8sZfNHgN4Bzynjz5hS3GxeO58O~BRpJorDmgfCMkcwtCrf8I5L7Odnik70RF8wL11HFX4wgClgXLkz980ozQRISreROqbz36tpZl0D~DHBLFoCBHydZa-Trqcgpp5CgRaKH2jjbVGw2DCYFmRTxcwx20rsJGT-~BAFOy1VQnfXJw3COLEDiZSA1yI6etrgvcIa0HWGuNDetMk6uypGEJOE3QvtNycfqzQAhPvpKrW416HQx15zsppbqq1xdDk7qGL3EBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            src={imgURL}
            alt={title}
          />
        </div>
        <p className="font-body-md group-hover:text-primary-500">
          {/* MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch */}
          {title}
        </p>
        <div className="flex items-end justify-between">
          <div className="flex flex-col items-start">
            {/* last price */}
            {lastPrice && (
              <p className="text-gray-71 line-through">
                {formatUSD(lastPrice)}
              </p>
            )}
            {/* current price */}
            <p className="font-body-lg">{formatUSD(currentPrice)}</p>
          </div>
          <IconText
            startIcon={<StarIcon />}
            className="text-[16px] font-medium"
          >
            {rate}
          </IconText>
        </div>
      </div>
    </Link>
  );
};
