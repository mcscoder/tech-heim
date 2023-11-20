import { AuthTypes } from "@/types";
import { getRequest, postRequest } from "./Api";

export const userLoginAuth = (user: AuthTypes.UserLogin) => {
  const filter = AuthTypes.userLoginFilter(user);
  return getRequest("users", filter);
};

export const userRegisterAuth = (user: AuthTypes.UserRegister) => {
  return postRequest("users", user);
};
