import { getRequest } from "./Api";

export const getUsers = () => {
  return getRequest("users");
};
