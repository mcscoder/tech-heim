import { OrderCard } from "@/components/Elements";
import { CommonLayout } from ".";
import { useParams } from "react-router";
import { OrderDetailed } from "@/components/Layouts";

export const Order = () => {
  const { orderId } = useParams();

  return (
    <CommonLayout
      title="Order History"
      description="Track, return or purchase items"
      className="flex flex-col gap-6"
    >
      {orderId ? (
        <OrderDetailed />
      ) : (
        <>
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </>
      )}
    </CommonLayout>
  );
};
