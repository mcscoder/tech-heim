import { OrderCard } from "@/components/Elements";
import { CommonLayout } from ".";
import { useParams } from "react-router";
import { OrderDetailed } from "@/components/Layouts";
import { useOrderState } from "@/hooks";

export const Order = () => {
  const { orderId } = useParams();

  const { orders } = useOrderState();

  return (
    <CommonLayout
      title="Order History"
      description="Track, return or purchase items"
      className="flex flex-col gap-6"
    >
      {orderId ? (
        <OrderDetailed {...orders[parseInt(orderId)]} />
      ) : (
        <>
          {orders &&
            orders.map((item, index) => {
              return (
                <OrderCard
                  key={index}
                  index={index}
                  {...item}
                />
              );
            })}
        </>
      )}
    </CommonLayout>
  );
};
