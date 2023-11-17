import { getUsers } from "@/api/Auth";
import { AuthContext } from "@/contexts";
import { authReducer, initialAuthState, updateUser } from "@/redux";
import { AuthTypes } from "@/types";
import { useEffect, useReducer } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    getUsers.then((result: AuthTypes.User[]) => {
      authDispatch(updateUser(result));
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
