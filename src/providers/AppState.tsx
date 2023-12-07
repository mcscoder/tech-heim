import { ScreenLoaderProvider } from "@/components/Layouts";
import { CartProvider } from ".";
import { AuthProvider } from "./Auth";

interface AppStateProps {
  children: React.ReactNode;
}

export const AppState = ({ children }: AppStateProps) => {
  return (
    <ScreenLoaderProvider>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </ScreenLoaderProvider>
  );
};
