import { AuthTypes } from "@/types";
import { getRequest, postRequest } from "./Api";

export const getUsers = () => {
  return getRequest("users");
};

export const postUser = (user: AuthTypes.User) => {
  return postRequest("users", user);
};
