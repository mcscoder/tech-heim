import { FormProps, MessageType } from "@/components/Elements";
import { useScreenLoader } from "@/components/Layouts";
import { getRequestURL, isEmailFormat } from "@/utils";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export const useChangePassword = () => {
  const [formState, setFormState] = useState<
    Pick<FormProps, "error" | "success"> & { email: boolean }
  >({
    error: undefined,
    success: undefined,
    email: false,
  });

  const { handleCallApi } = useScreenLoader();

  const handleGetCode = (email: string) => {
    if (!isEmailFormat(email)) {
      setFormState((prev) => {
        return {
          ...prev,
          error: "Enter a valid email",
          success: undefined,
        };
      });
      return;
    }

    handleCallApi(async () => {
      try {
        const requestURL = getRequestURL("code");
        const response = await axios.post<MessageType>(requestURL, {
          email,
        });

        setFormState(() => {
          console.log(response.data.message);
          return {
            email: true,
            success: response.data.message,
            error: undefined,
          };
        });
      } catch (error) {
        const response = (error as AxiosError<MessageType>).response;
        setFormState((prev) => {
          return {
            ...prev,
            success: undefined,
            error: response?.data.message,
          };
        });
      }
    });
  };

  const handleNewPassword = (email: string, code: string, password: string) => {
    handleCallApi(async () => {
      try {
        const requestURL = getRequestURL("newPassword");
        const response = await axios.post<MessageType>(requestURL, {
          email: email,
          code: code,
          password: password,
        });

        setFormState((prev) => {
          return {
            ...prev,
            success: response.data.message,
            error: undefined,
          };
        });
        location.reload();
      } catch (error) {
        const response = (error as AxiosError<MessageType>).response;
        setFormState((prev) => {
          return {
            ...prev,
            error: response?.data.message,
            success: undefined,
          };
        });
      }
    });
  };

  return {
    formState,
    setFormState,
    handleGetCode,
    handleNewPassword,
  };
};
