import { AuthContext } from "@/contexts";
import { useAuthContext } from "@/hooks";
import { authReducer, initialAuthState } from "@/redux";
import { getToken } from "@/utils";
import { useEffect, useReducer } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const InitialAuthState = ({ children }: AuthProviderProps) => {
  const { handleTokenLogin } = useAuthContext();

  useEffect(() => {
    if (getToken().token) {
      handleTokenLogin();
    }
  }, []);

  return children;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      <InitialAuthState>{children}</InitialAuthState>
    </AuthContext.Provider>
  );
};
