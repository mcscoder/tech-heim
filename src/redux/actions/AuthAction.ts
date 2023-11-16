import { AuthTypes } from "@/types";

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REGISTER = "REGISTER",
  RESET_ERROR = "RESET_ERROR",
}

export type AuthAction =
  | {
      type: AuthActionTypes.LOGIN;
      payload: AuthTypes.UserLogin;
    }
  | {
      type: AuthActionTypes.REGISTER;
      payload: AuthTypes.UserRegister;
    }
  | {
      type: AuthActionTypes.LOGOUT;
    }
  | {
      type: AuthActionTypes.RESET_ERROR;
    };

export const login = (user: AuthTypes.UserLogin): AuthAction => {
  return {
    type: AuthActionTypes.LOGIN,
    payload: user,
  };
};

export const register = (user: AuthTypes.UserRegister): AuthAction => {
  return {
    type: AuthActionTypes.REGISTER,
    payload: user,
  };
};

export const logout = (): AuthAction => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};

export const resetError = (): AuthAction => {
  return {
    type: AuthActionTypes.RESET_ERROR,
  };
};
