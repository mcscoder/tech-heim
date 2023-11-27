const dataList = [
  {
    label: "Display",
    value: "13.3-inch (diagonal) LED-backlit display with IPS technology",
  },
  { label: "Graphics", value: "Display" },
  { label: "Processor", value: "Apple M2 chip" },
  {
    label: "In the box",
    value: "67W USB-C Power Adapter, USB-C Charge Cable (2 m)",
  },
  { label: "Height", value: "0.61 inch (1.56 cm)" },
  { label: "Width", value: "11.97 inches (30.41 cm)" },
];

export const TechnicalDetailSection = () => {
  return (
    <section className="content-container">
      <div className="flex flex-col gap-4 max-w-[900px]">
        <h5>Technical Details</h5>
        <div className="flex flex-col">
          {dataList.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-4 odd:bg-gray-f9f"
            >
              <h6 className="w-[30%] text-gray-71">{item.label}</h6>
              <p className="font-body-md text-gray-d2d">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
