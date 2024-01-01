import { OrderSummaryCard } from "@/components/Elements";

export const OrderDetailed = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Order code</h6>
        <p className="flex-1 font-body-md">#1050486</p>
      </div>
      <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Placed on</h6>
        <p className="flex-1 font-body-md">2023/04/15</p>
      </div>
      <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Sent to</h6>
        <p className="flex-1 font-body-md">31,Albuquerque,New York</p>
      </div>
      <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Payment type </h6>
        <p className="flex-1 font-body-md">Cash</p>
      </div>
      <div className="flex odd:bg-gray-f9f p-4">
        <h6 className="flex-1">Total</h6>
        <p className="flex-1 font-body-md">$543.02</p>
      </div>
      <div className="flex flex-col gap-6">
        <OrderSummaryCard
          id={1}
          currentPrice={3000}
          lastPrice={4000}
          name="Macbook"
          productImage={[
            {
              imageURL:
                "https://s3-alpha-sig.figma.com/img/da0e/b4b4/8976c397ec43f918ec3c69b360439260?Expires=1705276800&Signature=H2y89C5Z-WR2IOme~UptkV85rHgY08gtZlGFle-LqVGrnW7HFuxc3T5Ln5u9skbcVPISOuzS2VDbprvNrwnU1CYUEFKUPDXxnG8xm1XfzFlJ96tEL42nOXWfI7Ay6rGWpFB-B2jhjGZkavEREbwBR1kncdqU6Pn3nBYdSaaKm7G3lD5tff20tIVSuqi7G7R1WV0-5ESkxIk1b92lrqyJXrTFX0cX~WDEP3Q9PxDMgZcWdCpVLa7DQroFejSBNeHrBeU9~3z-U-IbLvHuRZisxHdc2AlBmPy4SGg8nNmZ88TlTDv0SSyG1QDTcLo5td645W0xcEpln-owp9sM2gbEIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            },
          ]}
          quantity={30}
        />
      </div>
    </div>
  );
};
