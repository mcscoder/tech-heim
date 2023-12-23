import { useProductDetailContext } from "@/hooks";

export const TechnicalDetailSection = () => {
  const { productDetail } = useProductDetailContext();

  return (
    <section className="content-container">
      <div className="flex flex-col gap-4 max-w-[900px]">
        <h5>Technical Details</h5>
        <div className="flex flex-col">
          {productDetail.productTechnical?.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-4 odd:bg-gray-f9f"
            >
              <h6 className="w-[30%] text-gray-71">{item.title}</h6>
              <p className="font-body-md text-gray-d2d">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
