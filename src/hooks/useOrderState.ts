import { useScreenLoader } from "@/components/Layouts";
import { OrderTypes } from "@/types";
import { getRequestURL, getToken } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";

export const useOrderState = () => {
  const [orders, setOrders] = useState<OrderTypes.Order[]>([]);
  const { handleCallApi } = useScreenLoader();

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = () => {
    handleCallApi(async () => {
      try {
        const url = getRequestURL("order");
        const response = await axios.get<OrderTypes.Order[]>(url, {
          headers: {
            token: getToken().token,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  };

  return { orders, setOrders };
};
