import { AuthTypes } from "@/types";
import { AuthAction, AuthActionTypes } from "..";
import { removeToken } from "@/utils";

export interface AuthState {
  user: AuthTypes.UserData | null;
  login: {
    ok: boolean;
    error: string | null;
  };
  register: {
    ok: boolean;
    error: string | null;
  };
}

export const initialAuthState: AuthState = {
  user: null,
  login: {
    ok: false,
    error: null,
  },
  register: {
    ok: false,
    error: null,
  },
};

export const authReducer = (
  state: AuthState, // current value
  action: AuthAction // do something and return a value that match to the current value type
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      const payload = action.payload;
      // Login failed
      if (payload.userData === null) {
        return {
          ...state,
          login: {
            ok: false,
            error: "Incorrect E-mail or password",
          },
        };
      }

      // Login succeeded
      return {
        ...state,
        user: payload.userData,
        login: {
          ok: true,
          error: null,
        },
      };
    }

    case AuthActionTypes.REGISTER: {
      if (action.payload.registerState === false) {
        return {
          ...state,
          register: {
            ok: false,
            error: action.payload.message,
          },
        };
      }
      return {
        ...state,
        register: {
          ok: true,
          error: null,
        },
      };
    }

    case AuthActionTypes.RESET_ERROR: {
      return {
        ...state,
        login: {
          ok: false,
          error: null,
        },
        register: {
          ok: false,
          error: null,
        },
      };
    }

    case AuthActionTypes.LOGOUT: {
      removeToken();
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
