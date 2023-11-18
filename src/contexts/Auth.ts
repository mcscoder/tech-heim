import { AuthAction, AuthState } from "@/redux";
import { createContext } from "react";

interface AuthContextType {
  authState: AuthState;
  authDispatch: React.Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
