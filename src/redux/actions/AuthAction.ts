import { AuthTypes } from "@/types";

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REGISTER = "REGISTER",
  RESET_ERROR = "RESET_ERROR",
  UPDATE_USER = "UPDATE_USER",
}

export type AuthAction =
  | {
      type: AuthActionTypes.LOGIN;
      payload: AuthTypes.User | null;
    }
  | {
      type: AuthActionTypes.REGISTER;
      payload: AuthTypes.User | null;
    };

export const login = (user: AuthTypes.User | null): AuthAction => {
  return {
    type: AuthActionTypes.LOGIN,
    payload: user,
  };
};

export const register = (user: AuthTypes.User | null): AuthAction => {
  return {
    type: AuthActionTypes.REGISTER,
    payload: user,
  };
};
