import { Carousel, Link, SwiperNavigationButton } from "@/components/Elements";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowRightIcon,
} from "@/constants";
import { Navigation } from "swiper/modules";

export const SaleSection = () => {
  // const [productSales, setProductSales] = useState<SaleCardApi[] | null>(null);

  // useEffect(() => {
  //   getRequest("productSales", "").then((data: SaleCardApi[]) => {
  //     setProductSales(data);
  //   });
  // }, []);

  // if (productSales === null) {
  //   return;
  // }

  return (
    <section className="content-container relative flex gap-20 bg-primary-500 rounded-lg pt-8 pl-8 pr-8">
      <div className="absolute bg-white/10 top-0 left-0 bottom-16 w-[250px] rounded-br-[90%_100%] rounded-tl-[100%_50%]"></div>
      <div className="flex flex-col items-center gap-20 text-white z-10 mt-8">
        <div className="flex flex-col items-center gap-2">
          <h4>Product On Sale</h4>
          <p className="font-body-xl">Shop Now!</p>
        </div>
        <Link
          endIcon={<ArrowRightIcon />}
          className="font-button-lg"
        >
          View all
        </Link>
      </div>
      <Carousel
        modules={[Navigation]}
        className="flex-1 flex flex-col gap-2 p-2"
        slidesPerView={4}
      >
        {/* {productSales.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <SaleCard
                to={productRoute(`${product.id}`)}
                title={product.title}
                imgURL={product.imgURL}
                lastPrice={product.lastPrice}
                currentPrice={product.currentPrice}
              />
            </SwiperSlide>
          );
        })} */}
        <div className="flex items-center justify-end">
          <SwiperNavigationButton
            variant="onlyIcon"
            startIcon={<ArrowCircleLeftIcon />}
          />
          <SwiperNavigationButton
            variant="onlyIcon"
            startIcon={<ArrowCircleRightIcon />}
            right
          />
        </div>
      </Carousel>
    </section>
  );
};
