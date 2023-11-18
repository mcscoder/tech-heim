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
    }
  | {
      type: AuthActionTypes.RESET_ERROR;
    }
  | {
      type: AuthActionTypes.LOGOUT;
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

export const resetError = (): AuthAction => {
  return {
    type: AuthActionTypes.RESET_ERROR,
  };
};

export const logout = (): AuthAction => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};
