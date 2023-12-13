import { ProductCategory, ProductCategoryProps } from "@/components/Elements";
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
import { useProductContext } from "@/hooks";

export const categoryItems: ProductCategoryProps[] = [
  {
    icon: <MobileIcon />,
    label: "Mobile",
  },
  {
    icon: <LaptopIcon />,
    label: "Laptop",
  },
  {
    icon: <TabletIcon />,
    label: "Tablet",
  },
  {
    icon: <HeadPhoneIcon />,
    label: "Audio",
  },
  {
    icon: <WatchStatusIcon />,
    label: "Wearable",
  },
  {
    icon: <CameraIcon />,
    label: "Camera",
  },
  {
    icon: <GameIcon />,
    label: "Gaming",
  },
  {
    icon: <DataIcon />,
    label: "Network",
  },
  {
    icon: <AccessoriesIcon />,
    label: "Accessories",
  },
];

export const Categories = () => {
  const { setParams, getParamValue, paramKeyValuePair } = useProductContext();

  return (
    <section className="content-container flex items-center justify-center gap-8">
      {categoryItems.map((categoryItem, index) => {
        const categoryId = index + 1;
        const currentCategoryId = getParamValue("categoryId");
        return (
          <ProductCategory
            key={categoryId}
            isActive={`${categoryId}` === currentCategoryId}
            icon={categoryItem.icon}
            label={categoryItem.label}
            onClick={() =>
              setParams(paramKeyValuePair("categoryId", `${categoryId}`))
            }
          />
        );
      })}
    </section>
  );
};
