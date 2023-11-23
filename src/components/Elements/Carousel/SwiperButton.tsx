import { useSwiper } from "swiper/react";
import { Button, ButtonProps } from "..";

type SwiperNextButtonProps = ButtonProps & {
  right?: boolean;
};

export const SwiperNavigationButton = ({
  right,
  ...props
}: SwiperNextButtonProps) => {
  const swiper = useSwiper();

  return (
    <Button
      onClick={() => (right ? swiper.slideNext() : swiper.slidePrev())}
      {...props}
    ></Button>
  );
};
