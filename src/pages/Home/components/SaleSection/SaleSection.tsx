import {
  Carousel,
  Link,
  SaleCard,
  SwiperNavigationButton,
} from "@/components/Elements";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowRightIcon,
} from "@/constants";
import { useHomeProductState } from "@/hooks";
import { useEffect } from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

export const SaleSection = () => {
  const { products, getSaleProducts } = useHomeProductState();

  useEffect(() => {
    getSaleProducts();
  }, []);

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
        {products?.map((product, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex"
            >
              <SaleCard {...product} />
            </SwiperSlide>
          );
        })}
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
