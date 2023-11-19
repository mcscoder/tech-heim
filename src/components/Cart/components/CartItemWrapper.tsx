import { Button, IconText } from "@/components/Elements";
import {
  DeliveryIcon,
  GuaranteedIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@/constants";

export const CartItemWrapper = () => {
  return (
    <div className="flex gap-4 rounded-lg shadow-1 p-4">
      <div className="flex-[2]">
        <img
          src="https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1701043200&Signature=PE~2jqgoVyrCmcbadGT5odxwXVn1vTj16P5Rebyy9uRSGsaWBHQNH8gwVcvmdadyLZwuLekyYxvT65We6CxcpdRoFqKMPhQzOcdoBrOFz3gE0z2pQmw1kw-yau2BiKfZjbbB5LZ7Lm69p7OgvIU7cdXvpoUh9QzWyEXFhfwik8NRcmwr2LQNZeaHlFBvUDrNImSISG38XPicmaghbkFNhu~CeqhUKrPU4IS1EpSHbx1qE~cgdk-ndlW1VckfNGggORMj~sKl6W-GANacfgSW-LLCMiPlygImYuxjZaIvll2pOFYgA0tv~Hy2t2HxTWf35jH-76NH~-4pmPS0GiBCGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
      <div className="flex-[3] flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h6>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</h6>
          <div className="flex flex-col">
            <p className="font-caption-sm text-gray-71">Black</p>
            <p className="font-caption-sm text-gray-71">x1</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <IconText
            className="font-caption-sm text-gray-71"
            startIcon={<DeliveryIcon />}
          >
            Free Delivery
          </IconText>
          <IconText
            className="font-caption-sm text-gray-71"
            startIcon={<GuaranteedIcon />}
          >
            Guaranteed
          </IconText>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-body-md text-gray-d2d">$433333.00</p>
          <div className="flex items-center justify-center gap-1">
            <Button
              variant="onlyIcon"
              startIcon={<TrashIcon />}
            />
            <div className="flex items-center gap-3 border-b-[1px] border-b-gray-e9e">
              <Button
                variant="onlyIcon"
                startIcon={<MinusIcon />}
              />
              <span>1</span>
              <Button
                variant="onlyIcon"
                startIcon={<PlusIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
