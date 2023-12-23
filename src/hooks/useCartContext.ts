import { useScreenLoader } from "@/components/Layouts";
import { CartContext } from "@/contexts";
import { getRequestURL, getToken } from "@/utils";
import axios from "axios";
import { useContext } from "react";

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("useCartContext must be used within CartProvider");
  }

  const { handleCallApi } = useScreenLoader();
  const { cartItems, setCartItems } = cartContext;

  const getCart = async () => {
    try {
      const requestURL = getRequestURL("cart");
      const response = await axios.get(requestURL, {
        headers: {
          "ngrok-skip-browser-warning": "69420",
          token: getToken().token,
        },
      });

      if (response.status === 200) {
        setCartItems(response.data || []);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleAddProduct = (productId: number) => {
    handleCallApi(async () => {
      try {
        const requestURL = getRequestURL("cart");
        const response = await axios.post(
          requestURL,
          { id: productId },
          {
            headers: {
              "ngrok-skip-browser-warning": "69420",
              token: getToken().token,
            },
          }
        );
        if (response.status !== 200) {
          throw new Error("Can't fetch data");
        }
        getCart();
      } catch (error) {
        console.log((error as Error).message);
      }
    });
  };

  const handleRemoveProduct = (productId: number) => {
    handleCallApi(async () => {
      try {
        const requestURL = `${getRequestURL("cart")}?delete=true`;
        const response = await axios.post(
          requestURL,
          { id: productId },
          {
            headers: {
              "ngrok-skip-browser-warning": "69420",
              token: getToken().token,
            },
          }
        );
        if (response.status !== 200) {
          throw new Error("Can't fetch data");
        }
        getCart();
      } catch (error) {
        console.log((error as Error).message);
      }
    });
  };

  const handleDecreaseProduct = (productId: number) => {
    handleCallApi(async () => {
      try {
        const requestURL = `${getRequestURL("cart")}?decrease=true`;
        const response = await axios.post(
          requestURL,
          { id: productId },
          {
            headers: {
              "ngrok-skip-browser-warning": "69420",
              token: getToken().token,
            },
          }
        );
        if (response.status !== 200) {
          throw new Error("Can't fetch data");
        }
        getCart();
      } catch (error) {
        console.log((error as Error).message);
      }
    });
  };

  return {
    cartItems,
    setCartItems,
    getCart,
    handleAddProduct,
    handleRemoveProduct,
    handleDecreaseProduct,
  };
};
