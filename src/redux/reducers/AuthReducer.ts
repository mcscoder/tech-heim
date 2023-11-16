import { AuthTypes } from "@/types";
import { AuthAction, AuthActionTypes } from "..";

export interface AuthState {
  users: AuthTypes.User[];
  login: {
    user: AuthTypes.User | null;
    error: string | null;
  };
  register: {
    error: string | null;
    success: boolean;
  };
}

export const initialAuthState: AuthState = {
  users: [
    {
      id: "1",
      email: "mcs@gmail.com",
      fullName: "Son Mai",
      password: "mcs",
    },
  ],
  login: {
    user: null,
    error: null,
  },
  register: {
    error: null,
    success: false,
  },
};

export const authReducer = (
  state: AuthState, // current value
  action: AuthAction // do something and return a value that match to the current value type
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      const payload = action.payload;
      const user = state.users.find((u) => u.email === payload.email) || null;
      if (!user) {
        return {
          ...state,
          login: {
            user: null,
            error: "User not found!",
          },
        };
      }
      if (user.password !== payload.password) {
        return {
          ...state,
          login: {
            user: null,
            error: "Password is incorrect",
          },
        };
      }
      return {
        ...state,
        login: {
          user,
          error: null,
        },
      };
    }
    case AuthActionTypes.RESET_ERROR: {
      return {
        ...state,
        login: {
          ...state.login,
          error: null,
        },
        register: {
          ...state.register,
          error: null,
        },
      };
    }
    default:
      return state;
  }
};
