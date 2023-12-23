import { Carousel, IconText } from "@/components/Elements";
import { DeliveryIcon, GuaranteedIcon, StarIcon } from "@/constants";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { PurchaseSection } from "..";
import { useProductDetailContext } from "@/hooks";

export const OverViewSection = () => {
  const { productDetail } = useProductDetailContext();

  return (
    <section className="content-container flex gap-6 py-10">
      <Carousel
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        slidesPerView={1}
        className="rounded-xl flex-1"
      >
        {productDetail.productImage?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="w-full h-full object-cover"
                src={image.imageURL}
                alt={productDetail.name}
              />
            </SwiperSlide>
          );
        })}
      </Carousel>
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-2">
          <h4>{productDetail.name}</h4>
          <div className="flex items-center gap-4">
            <IconText
              startIcon={<StarIcon />}
              className="!items-baseline"
            >
              {productDetail.rate}
            </IconText>
            <div className="h-6 w-[1px] bg-gray-71"></div>
            <p className="font-caption-lg text-gray-71">
              sold {productDetail.sold}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <IconText
            className="font-caption-md text-gray-71"
            startIcon={<DeliveryIcon />}
          >
            Free Delivery
          </IconText>
          <IconText
            className="font-caption-md text-gray-71"
            startIcon={<GuaranteedIcon />}
          >
            Guaranteed
          </IconText>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 max-w-[300px] px-4">
          {productDetail.productGroup.map((item) => {
            return (
              <>
                <p className="text-gray-71">{item.title}</p>
                <p>{item.productType[0].title}</p>
              </>
            );
          })}
        </div>
      </div>
      <PurchaseSection className="h-fit flex-[0.6]" />
    </section>
  );
};
