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
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

export const SalesSection = () => {
  return (
    <div className="content-container relative flex gap-20 bg-primary-500 rounded-lg pt-8 pl-8 pr-8">
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
        // navigation={true}
      >
        <SwiperSlide>
          <SaleCard
            to={"#"}
            imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse "
            lastPrice={40}
            currentPrice={19}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard
            to={"#"}
            imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse "
            lastPrice={40}
            currentPrice={19}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard
            to={"#"}
            imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse "
            lastPrice={40}
            currentPrice={19}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard
            to={"#"}
            imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse "
            lastPrice={40}
            currentPrice={19}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard
            to={"#"}
            imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse "
            lastPrice={40}
            currentPrice={19}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard
            to={"#"}
            imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse "
            lastPrice={40}
            currentPrice={19}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard
            to={"#"}
            imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse "
            lastPrice={40}
            currentPrice={19}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SaleCard
            to={"#"}
            imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse "
            lastPrice={40}
            currentPrice={19}
          />
        </SwiperSlide>
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

      {/* <div className="flex-1 flex justify-between">
        <SaleCard
          to={"#"}
          imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse Logitech G502 Gaming Mouse "
          lastPrice={40}
          currentPrice={19}
        />
        <SaleCard
          to={"#"}
          imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Logitech G502 "
          lastPrice={40}
          currentPrice={19}
        />
        <SaleCard
          to={"#"}
          imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Logitech G502 Gaming Mouse"
          lastPrice={40}
          currentPrice={19}
        />
        <SaleCard
          to={"#"}
          imgURL="https://s3-alpha-sig.figma.com/img/9c8c/1095/662fbb931b826d41b8076f711400afe6?Expires=1701648000&Signature=UXf~0awXPpnuQ1wmy~p-rLSkMTIQajf9xR26VDL06MmQ0Qh7AYinJC9QNXLs3wkyN7LO1thjdrtsyK1hek~ENZYTSM~HOMQXGIE0H6Oz1y3~7A93Ucz87MCazsd8nvs84Y4zCZWEWreyBsx7yDA-9HGoFDmRv8CI0PrnkBr5rCAXtvTS89j4E2YBVDumBSiZHeqAjPAbzm5KmLpSlIvqCadzVbxpk6b8z4R5~MQFFWmlJyJuxlIrJogTgd~KWW5kEc262UIu~ncs4qPHeBb1P~RBeuK0LzFHhaGaYg7bz2zKsWyaDB4zZdqiP48cq~VNitwCJz0IxDgyigQul2epIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Logitech G502 Gaming Mouse"
          lastPrice={40}
          currentPrice={19}
        />
      </div> */}
    </div>
  );
};
