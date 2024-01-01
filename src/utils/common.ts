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

export const isEmailFormat = (email: string) => {
  // leebinn69@gmail.com
  // leebinn69 ~ [^\s@]
  // @ ~ +@
  // gmail ~ [^\s@]
  // . ~ +\.
  // com ~ [^\s@]
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const handleEmailFormat = (
  e: React.ChangeEvent<HTMLInputElement>,
  ref: React.RefObject<HTMLInputElement>
) => {
  const email = e.target.value;
  const inputRef = ref.current;

  if (inputRef) {
    if (isEmailFormat(email)) {
      inputRef.setCustomValidity("");
    } else {
      inputRef.setCustomValidity("Enter a valid email");
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

export const dateConversion = (dateString: string): string => {
  console.log(dateString);
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
