import { AuthProvider } from "./Auth";

interface AppStateProps {
  children: React.ReactNode;
}

export const AppState = ({ children }: AppStateProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
