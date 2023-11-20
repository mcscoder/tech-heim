import { AuthTypes } from "@/types";
import { AuthAction, AuthActionTypes } from "..";

export interface AuthState {
  user: AuthTypes.User | null;
  error: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = (
  state: AuthState, // current value
  action: AuthAction // do something and return a value that match to the current value type
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      const user = action.payload;
      if (user === null) {
        return {
          user: user,
          error: "Incorrect E-mail or password",
        };
      }
      return {
        user: user,
        error: null,
      };
    }

    case AuthActionTypes.REGISTER: {
      const user = action.payload;
      if (user === null) {
        return {
          user: null,
          error: "E-mail already exists",
        };
      }
      return {
        user: user,
        error: null,
      };
    }

    case AuthActionTypes.RESET_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    case AuthActionTypes.LOGOUT: {
      location.reload();
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
};
