import { Carousel, IconText } from "@/components/Elements";
import { DeliveryIcon, GuaranteedIcon, StarIcon } from "@/constants";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { PurchaseSection } from "..";

export const OverViewSection = () => {
  return (
    <section className="content-container flex gap-6 py-10">
      <Carousel
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        slidesPerView={1}
        className="rounded-xl flex-1"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1701648000&Signature=BNm3P2ciQV6m2ODpeSx2WwO--QuV~~vjWwJoBkZvZQWxnHCL0RkRf-fJhh-k0izdITKhP4XFksBgmLc1I8sZfNHgN4Bzynjz5hS3GxeO58O~BRpJorDmgfCMkcwtCrf8I5L7Odnik70RF8wL11HFX4wgClgXLkz980ozQRISreROqbz36tpZl0D~DHBLFoCBHydZa-Trqcgpp5CgRaKH2jjbVGw2DCYFmRTxcwx20rsJGT-~BAFOy1VQnfXJw3COLEDiZSA1yI6etrgvcIa0HWGuNDetMk6uypGEJOE3QvtNycfqzQAhPvpKrW416HQx15zsppbqq1xdDk7qGL3EBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/5fd6/1957/0c74f252d907de1330274dd41792a271?Expires=1701648000&Signature=THdHqqfIEst6VROM70~TSGgyJKqBcXREKSPb6Ytthuk7HZ90R5O7bJwwnXVUIsXYqfrpC7kob9OVdljSVCfswARVRR4mrjK9qvZeAL39MqMMWUok3I~wGNt~8cEr5nI2LgTVhbChqACIe-~TNZpRBMJIPoMtFOsS~vEJdtbfhjmDIEdpHj3leY8pBJnZMmVqb~30VmxS93HseAOnLmt53f1zMsK0pnsF6f7IPeesv4YiKG3bD11vmyXgmd9Uu32b5oMBK4HcD~JZ8l82-4zUzTwz9YfFby40r3ei-6uHfU9kjyfPwhMyhOKsEt-WZP7v-fQEz~Wjk2dQS1Dnx0X6lQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/db79/6071/9e5db0d986cce41fb6aaad5bbee3581a?Expires=1701648000&Signature=RH9jmABqhC~n24bbh6lqM1dWo2TS2j1~S4FRFPlTe2tL1jE3XS3xDJdS-h-EcyjYLDwdBCOzbDAhEY0wTj58Pg75Y8njQEMXkhAdMghnf5YzdtKTXRsnWpVVwnu8MNkdhKSNxn~gF5G8vNgtghc1b~b~7W9HCc0mGj3cjoJPX--9Z4uN5vF4UhBa~c7aLlU5p0CoQEk4Wv24lDCBzOXOlG-mHNxkeps3WdrKwZHjCaFwnHdpAMiThwgK4UAY92B6tsjYtwbMNtyX7f-8v859OcVPK8dYfncYr7CGUR4ptj68X2mn2AByP3B8067xF4DhG3ZgwzDIJL61g5QsRoAX0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/a9da/c2e1/f437553d09e7a5f53e798230b5150cbe?Expires=1701648000&Signature=JHk7-13ULeTXeMN8Wu-cLccVNJdTXSdDHqorbp6QU35J-KREblw~LUlPbyEP1HfmRzB9mAiqe3YiK2TTVmBLE4Km5NI~Ou66yIhNxzkha5pSU3DU5Y6xbYl5EQye990RJgWuIOIrvSNaUpDzUHdV46DZEYohZajZLBHHqvoPHv1HPu1zMj9y1n8WmczGl5wHjEyTCb3j-nrPFYeSs7o6cP12Dt1Xc3nXsquWxwhiE~nfCBVBNkVzZhrjRT5oV8A9UWRaNcG2Z2BYKgmnjIWGr4wxpMsaG1MOSyNmM64GZouoMPDIiBrw6oYjJouJ0jTD19rIr5cLKVfzo00p5Ge7yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </SwiperSlide>
      </Carousel>
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-2">
          <h4>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h4>
          <div className="flex items-center gap-4">
            <IconText
              startIcon={<StarIcon />}
              className="!items-baseline"
            >
              4.9
            </IconText>
            <div className="h-full w-[1px] bg-gray-71"></div>
            <p className="font-caption-lg text-gray-71">sold 125</p>
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
          <p className="text-gray-71">Brand</p>
          <p>Apple</p>

          <p className="text-gray-71">Model Name </p>
          <p>MacBook Pro</p>

          <p className="text-gray-71">Screen Size</p>
          <p>13.3 Inches</p>

          <p className="text-gray-71">Hard Disk Size</p>
          <p>256GB</p>

          <p className="text-gray-71">CPU Model</p>
          <p>core i5</p>
        </div>
      </div>
      <PurchaseSection className="h-fit flex-[0.6]" />
    </section>
  );
};
