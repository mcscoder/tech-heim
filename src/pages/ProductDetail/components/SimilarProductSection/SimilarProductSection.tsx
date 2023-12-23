import { ProductCard } from "@/components/Elements";
import { ProductGridWrapper } from "@/components/Layouts";

const productList = [
  {
    name: "Apple 2022 MacBook Pro Laptop with M2 chip 14-inch",
    productImage: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/924c/cba2/fe0805396358291d7f8fad4e3e7602e9?Expires=1703462400&Signature=IyJn-WFmfQgTfYo4b9Y6SGyApYD9ELCARkT~ok6fkPzoO1A~D8Z2aI1kmk46cmRKNUmIL~qEHIRwaKHU14gpEa~mwhxwYGDPR4f2Lk0nhYaqzO3FQ~AJqIkF~-XnnsWaiN0QcjSIv82zqahghu0sdYJiSp4F5CLQpcBR9nd5rXarDIyF6aY2555wsz4bU1OeR9wZd0M3WWaCHawln76rbNYv~Zy-0GP-InrLueXWUvnMxzRuiiM4Ou--wGQdfs1Gg5BI8IidhxYHZnRa3mMNLtb6qkT~8Cu~WJ29XsOLa21TXINkGpyxddxks3F~pyzjLRznPAIt--ycDt2CniYG5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
    currentPrice: 109900,
    rate: 4.7,
  },
  {
    name: "Apple 2022 MacBook Air Laptop with M2 chip",
    productImage: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/924c/cba2/fe0805396358291d7f8fad4e3e7602e9?Expires=1703462400&Signature=IyJn-WFmfQgTfYo4b9Y6SGyApYD9ELCARkT~ok6fkPzoO1A~D8Z2aI1kmk46cmRKNUmIL~qEHIRwaKHU14gpEa~mwhxwYGDPR4f2Lk0nhYaqzO3FQ~AJqIkF~-XnnsWaiN0QcjSIv82zqahghu0sdYJiSp4F5CLQpcBR9nd5rXarDIyF6aY2555wsz4bU1OeR9wZd0M3WWaCHawln76rbNYv~Zy-0GP-InrLueXWUvnMxzRuiiM4Ou--wGQdfs1Gg5BI8IidhxYHZnRa3mMNLtb6qkT~8Cu~WJ29XsOLa21TXINkGpyxddxks3F~pyzjLRznPAIt--ycDt2CniYG5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
    currentPrice: 199900,
    rate: 4.7,
  },
  {
    name: "Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch",
    productImage: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/924c/cba2/fe0805396358291d7f8fad4e3e7602e9?Expires=1703462400&Signature=IyJn-WFmfQgTfYo4b9Y6SGyApYD9ELCARkT~ok6fkPzoO1A~D8Z2aI1kmk46cmRKNUmIL~qEHIRwaKHU14gpEa~mwhxwYGDPR4f2Lk0nhYaqzO3FQ~AJqIkF~-XnnsWaiN0QcjSIv82zqahghu0sdYJiSp4F5CLQpcBR9nd5rXarDIyF6aY2555wsz4bU1OeR9wZd0M3WWaCHawln76rbNYv~Zy-0GP-InrLueXWUvnMxzRuiiM4Ou--wGQdfs1Gg5BI8IidhxYHZnRa3mMNLtb6qkT~8Cu~WJ29XsOLa21TXINkGpyxddxks3F~pyzjLRznPAIt--ycDt2CniYG5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
    currentPrice: 139900,
    rate: 4.7,
  },
  {
    name: "Apple 2022 MacBook Air Laptop with M2 chip",
    productImage: [
      {
        imageURL:
          "https://s3-alpha-sig.figma.com/img/924c/cba2/fe0805396358291d7f8fad4e3e7602e9?Expires=1703462400&Signature=IyJn-WFmfQgTfYo4b9Y6SGyApYD9ELCARkT~ok6fkPzoO1A~D8Z2aI1kmk46cmRKNUmIL~qEHIRwaKHU14gpEa~mwhxwYGDPR4f2Lk0nhYaqzO3FQ~AJqIkF~-XnnsWaiN0QcjSIv82zqahghu0sdYJiSp4F5CLQpcBR9nd5rXarDIyF6aY2555wsz4bU1OeR9wZd0M3WWaCHawln76rbNYv~Zy-0GP-InrLueXWUvnMxzRuiiM4Ou--wGQdfs1Gg5BI8IidhxYHZnRa3mMNLtb6qkT~8Cu~WJ29XsOLa21TXINkGpyxddxks3F~pyzjLRznPAIt--ycDt2CniYG5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      },
    ],
    lastPrice: 123123123,
    currentPrice: 129900,
    rate: 4.7,
  },
];

export const SimilarProductSection = () => {
  return (
    <section className="content-container flex flex-col gap-6">
      <h5>Similar Product</h5>
      <ProductGridWrapper className="gap-6">
        {productList.map((item, index) => {
          return (
            <ProductCard
              to={"#"}
              id={1}
              key={index}
              name={item.name}
              lastPrice={item.lastPrice || null}
              currentPrice={item.currentPrice}
              productImage={item.productImage}
              rate={item.rate}
            />
          );
        })}
      </ProductGridWrapper>
    </section>
  );
};
