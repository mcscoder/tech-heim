import { AuthTypes } from "@/types";

export const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const regex = /\D/g;
  e.target.value = e.target.value.replace(regex, "");
};

export const handleShowPassword = (ref: React.RefObject<HTMLInputElement>) => {
  const type = ref.current?.type;
  if (type) {
    if (type === "password") {
      ref.current.type = "text";
    } else {
      ref.current.type = "password";
    }
  }
};

export const getToken = (): AuthTypes.AuthenticationToken => {
  return {
    token: localStorage.getItem("token"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
};

export const setToken = (tokens: AuthTypes.AuthenticationToken) => {
  localStorage.setItem("token", tokens.token!);
  localStorage.setItem("refreshToken", tokens.refreshToken!);
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};
