import { AuthTypes } from "@/types";

export enum AuthActionTypes {
  LOGIN,
  LOGOUT,
  REGISTER,
  RESET_ERROR,
  UPDATE_USER,
}

export type AuthAction =
  | {
      type: AuthActionTypes.LOGIN;
      payload: {
        userData: AuthTypes.UserData | null;
      };
    }
  | {
      type: AuthActionTypes.REGISTER;
      payload: {
        registerState: boolean;
        message: string | null;
      };
    }
  | {
      type: AuthActionTypes.RESET_ERROR;
    }
  | {
      type: AuthActionTypes.LOGOUT;
    };

export const login = (userData: AuthTypes.UserData | null): AuthAction => {
  return {
    type: AuthActionTypes.LOGIN,
    payload: {
      userData,
    },
  };
};

export const register = (
  registerState: boolean,
  message: string | null
): AuthAction => {
  return {
    type: AuthActionTypes.REGISTER,
    payload: { registerState, message },
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
