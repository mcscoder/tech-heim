import { AuthAction, AuthState, initialAuthState } from "@/redux";
import { createContext } from "react";

export interface AuthContextType {
  authState: AuthState;
  authDispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextType>({
  authState: initialAuthState,
  authDispatch: () => initialAuthState,
});
