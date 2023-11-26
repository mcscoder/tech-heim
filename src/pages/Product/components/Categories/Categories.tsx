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
import { ProductContext } from "@/contexts/Product";
import { getParamValue, paramKeyValuePair, productTypeId } from "@/utils";
import { useContext } from "react";

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
  const productContext = useContext(ProductContext);

  return (
    <section className="content-container flex items-center justify-center gap-8">
      {categoryItems.map((categoryItem, index) => {
        const categoryId = index + 1;
        const currentCategoryId = getParamValue(
          productContext.params,
          "categoryId"
        );
        return (
          <ProductCategory
            key={categoryId}
            isActive={`${categoryId}` === currentCategoryId}
            icon={categoryItem.icon}
            label={categoryItem.label}
            onClick={() =>
              productContext.setParams(
                paramKeyValuePair("categoryId", `${categoryId}`)
              )
            }
          />
        );
      })}
      <ProductCategory
        icon={<LaptopIcon />}
        label="Test Button"
        onClick={() =>
          productContext.setParams({
            ...productTypeId(productContext.params, "something"),
          })
        }
      />
    </section>
  );
};
