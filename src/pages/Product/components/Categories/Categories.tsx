import { ProductCategory } from "@/components/Elements";
import {
  AccessoriesIcon,
  CameraIcon,
  DataIcon,
  GameIcon,
  HeadPhoneIcon,
  LaptopIcon,
  MobileIcon,
  TabletIcon,
  WatchStatusIcon,
} from "@/constants";

export const Categories = () => {
  return (
    <section className="content-container flex items-center justify-center gap-8">
      <ProductCategory
        icon={<MobileIcon />}
        label="Mobile"
        onClick={() => {}}
      />
      <ProductCategory
        icon={<LaptopIcon />}
        label="Laptop"
        onClick={() => {}}
      />
      <ProductCategory
        icon={<TabletIcon />}
        label="Tablet"
        onClick={() => {}}
      />
      <ProductCategory
        icon={<HeadPhoneIcon />}
        label="Audio"
        onClick={() => {}}
      />
      <ProductCategory
        icon={<WatchStatusIcon />}
        label="Wearable"
        onClick={() => {}}
      />
      <ProductCategory
        icon={<CameraIcon />}
        label="Camera"
        onClick={() => {}}
      />
      <ProductCategory
        icon={<GameIcon />}
        label="Gaming"
        onClick={() => {}}
      />
      <ProductCategory
        icon={<DataIcon />}
        label="Network"
        onClick={() => {}}
      />
      <ProductCategory
        icon={<AccessoriesIcon />}
        label="Accessories"
        onClick={() => {}}
      />
    </section>
  );
};
