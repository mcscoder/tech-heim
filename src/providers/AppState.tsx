import { ScreenLoaderProvider } from "@/components/Layouts";
import { CartProvider } from ".";
import { AuthProvider } from "./Auth";
import { WishListProvider } from "./WishList";

interface AppStateProps {
  children: React.ReactNode;
}

export const AppState = ({ children }: AppStateProps) => {
  return (
    <ScreenLoaderProvider>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>{children}</WishListProvider>
        </CartProvider>
      </AuthProvider>
    </ScreenLoaderProvider>
  );
};
