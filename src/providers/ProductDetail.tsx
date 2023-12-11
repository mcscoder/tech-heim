import { ProductDetailContext } from "@/contexts";
import { useProductDetailContext } from "@/hooks";
import { ProductDetail } from "@/pages";
import { ProductTypes } from "@/types";
import { useEffect, useState } from "react";

interface InitialProductDetailStateProps {
  children: React.ReactNode;
}

const InitialProductDetailState = ({
  children,
}: InitialProductDetailStateProps) => {
  const { productId, getProductDetail } = useProductDetailContext();

  // uncomment when api is available
  useEffect(() => {
    getProductDetail();
    console.log(productId);
  }, [productId]);

  return children;
};

export const ProductDetailProvider = () => {
  const [productDetail, setProductDetail] = useState<ProductTypes.Product>({
    id: 0,
    name: "MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch",
    currentPrice: 1299.0,
    lastPrice: 1410.87,
    quantity: 125,
    sold: 124,
    rate: 4,
    productImage: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/924c/cba2/fe0805396358291d7f8fad4e3e7602e9?Expires=1703462400&Signature=IyJn-WFmfQgTfYo4b9Y6SGyApYD9ELCARkT~ok6fkPzoO1A~D8Z2aI1kmk46cmRKNUmIL~qEHIRwaKHU14gpEa~mwhxwYGDPR4f2Lk0nhYaqzO3FQ~AJqIkF~-XnnsWaiN0QcjSIv82zqahghu0sdYJiSp4F5CLQpcBR9nd5rXarDIyF6aY2555wsz4bU1OeR9wZd0M3WWaCHawln76rbNYv~Zy-0GP-InrLueXWUvnMxzRuiiM4Ou--wGQdfs1Gg5BI8IidhxYHZnRa3mMNLtb6qkT~8Cu~WJ29XsOLa21TXINkGpyxddxks3F~pyzjLRznPAIt--ycDt2CniYG5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/924c/cba2/fe0805396358291d7f8fad4e3e7602e9?Expires=1703462400&Signature=IyJn-WFmfQgTfYo4b9Y6SGyApYD9ELCARkT~ok6fkPzoO1A~D8Z2aI1kmk46cmRKNUmIL~qEHIRwaKHU14gpEa~mwhxwYGDPR4f2Lk0nhYaqzO3FQ~AJqIkF~-XnnsWaiN0QcjSIv82zqahghu0sdYJiSp4F5CLQpcBR9nd5rXarDIyF6aY2555wsz4bU1OeR9wZd0M3WWaCHawln76rbNYv~Zy-0GP-InrLueXWUvnMxzRuiiM4Ou--wGQdfs1Gg5BI8IidhxYHZnRa3mMNLtb6qkT~8Cu~WJ29XsOLa21TXINkGpyxddxks3F~pyzjLRznPAIt--ycDt2CniYG5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/924c/cba2/fe0805396358291d7f8fad4e3e7602e9?Expires=1703462400&Signature=IyJn-WFmfQgTfYo4b9Y6SGyApYD9ELCARkT~ok6fkPzoO1A~D8Z2aI1kmk46cmRKNUmIL~qEHIRwaKHU14gpEa~mwhxwYGDPR4f2Lk0nhYaqzO3FQ~AJqIkF~-XnnsWaiN0QcjSIv82zqahghu0sdYJiSp4F5CLQpcBR9nd5rXarDIyF6aY2555wsz4bU1OeR9wZd0M3WWaCHawln76rbNYv~Zy-0GP-InrLueXWUvnMxzRuiiM4Ou--wGQdfs1Gg5BI8IidhxYHZnRa3mMNLtb6qkT~8Cu~WJ29XsOLa21TXINkGpyxddxks3F~pyzjLRznPAIt--ycDt2CniYG5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/924c/cba2/fe0805396358291d7f8fad4e3e7602e9?Expires=1703462400&Signature=IyJn-WFmfQgTfYo4b9Y6SGyApYD9ELCARkT~ok6fkPzoO1A~D8Z2aI1kmk46cmRKNUmIL~qEHIRwaKHU14gpEa~mwhxwYGDPR4f2Lk0nhYaqzO3FQ~AJqIkF~-XnnsWaiN0QcjSIv82zqahghu0sdYJiSp4F5CLQpcBR9nd5rXarDIyF6aY2555wsz4bU1OeR9wZd0M3WWaCHawln76rbNYv~Zy-0GP-InrLueXWUvnMxzRuiiM4Ou--wGQdfs1Gg5BI8IidhxYHZnRa3mMNLtb6qkT~8Cu~WJ29XsOLa21TXINkGpyxddxks3F~pyzjLRznPAIt--ycDt2CniYG5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/924c/cba2/fe0805396358291d7f8fad4e3e7602e9?Expires=1703462400&Signature=IyJn-WFmfQgTfYo4b9Y6SGyApYD9ELCARkT~ok6fkPzoO1A~D8Z2aI1kmk46cmRKNUmIL~qEHIRwaKHU14gpEa~mwhxwYGDPR4f2Lk0nhYaqzO3FQ~AJqIkF~-XnnsWaiN0QcjSIv82zqahghu0sdYJiSp4F5CLQpcBR9nd5rXarDIyF6aY2555wsz4bU1OeR9wZd0M3WWaCHawln76rbNYv~Zy-0GP-InrLueXWUvnMxzRuiiM4Ou--wGQdfs1Gg5BI8IidhxYHZnRa3mMNLtb6qkT~8Cu~WJ29XsOLa21TXINkGpyxddxks3F~pyzjLRznPAIt--ycDt2CniYG5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
    productTechnical: [
      {
        title: "Display",
        description:
          "13.3-inch (diagonal) LED-backlit display with IPS technology",
      },
      {
        title: "Graphics",
        description: "Display",
      },
      {
        title: "Processor",
        description: "Apple M2 chip",
      },
      {
        title: "In the box",
        description: "67W USB-C Power Adapter, USB-C Charge Cable (2m)",
      },
      {
        title: "Height",
        description: "0.61 inch (1.56 cm)",
      },
      {
        title: "Width",
        description: "11.97 inches (30.41 cm)",
      },
    ],
    productGroup: [
      {
        title: "Brand",
        productType: [
          {
            id: 0,
            title: "Apple",
          },
        ],
      },
      {
        title: "Model name",
        productType: [
          {
            id: 0,
            title: "MacBook Pro",
          },
        ],
      },
      {
        title: "Screen size",
        productType: [
          {
            id: 0,
            title: "13.3 Inches",
          },
        ],
      },
      {
        title: "Hard disk size",
        productType: [
          {
            id: 0,
            title: "256GB",
          },
        ],
      },
      {
        title: "CPU model",
        productType: [
          {
            id: 0,
            title: "Core i5",
          },
        ],
      },
    ],
    productComment: [
      {
        firstName: "Alice",
        lastName: "Johnson",
        description:
          "This is a great product! I really liked it. The quality is outstanding, and it exceeded my expectations. The packaging was also excellent, ensuring that the product arrived in perfect condition.",
      },
      {
        firstName: "Bob",
        lastName: "Smith",
        description:
          "Excellent service and fast delivery. I ordered this product, and it arrived sooner than I expected. The customer service was responsive and helpful. Overall, a very positive experience.",
      },
      {
        firstName: "Charlie",
        lastName: "Brown",
        description:
          "Good quality but a bit expensive. The product itself is of good quality, and I'm satisfied with its performance. However, I find the price to be on the higher side compared to similar products in the market.",
      },
    ],
  });

  return (
    <ProductDetailContext.Provider value={{ productDetail, setProductDetail }}>
      <InitialProductDetailState>
        <ProductDetail />
      </InitialProductDetailState>
    </ProductDetailContext.Provider>
  );
};
