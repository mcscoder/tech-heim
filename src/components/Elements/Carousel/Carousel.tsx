// Import Swiper React components
import { Swiper, SwiperProps, SwiperRef } from "swiper/react";

import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";

type CarouselProps = SwiperProps &
  React.RefAttributes<SwiperRef> & {
    children: React.ReactNode;
  };

export const Carousel = ({ children, className, ...props }: CarouselProps) => {
  return (
    <Swiper
      className={className}
      {...props}
    >
      {children}
    </Swiper>
  );
};
