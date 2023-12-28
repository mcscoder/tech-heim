import { createContext, useContext, useState } from "react";

export interface ScreenLoaderContextProps {
  loading: number;
  setLoading: React.Dispatch<React.SetStateAction<number>>;
}
export const ScreenLoaderContext = createContext<
  ScreenLoaderContextProps | undefined
>(undefined);

export interface ScreenLoaderProviderProps {
  children: React.ReactNode;
}

export const ScreenLoaderProvider = ({
  children,
}: ScreenLoaderProviderProps) => {
  const [loading, setLoading] = useState<number>(0);
  console.log(loading);
  return (
    <ScreenLoaderContext.Provider value={{ loading, setLoading }}>
      {loading !== 0 && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[9999] bg-black/70 flex items-center justify-center">
          <div className="border-l-4 border-l-Primary rounded-full w-32 h-32 animate-spin"></div>
        </div>
      )}
      {children}
    </ScreenLoaderContext.Provider>
  );
};

export const useScreenLoader = () => {
  const screenLoaderContext = useContext(ScreenLoaderContext);

  if (!screenLoaderContext) {
    throw new Error(
      "useScreenLoader must be used within ScreenLoaderProvider component "
    );
  }

  const { setLoading } = screenLoaderContext;

  const handleCallApi = async (apiCall: () => Promise<void>) => {
    setLoading((prevLoading) => prevLoading + 1);

    try {
      await apiCall();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading((prevLoading) => prevLoading - 1);
    }
  };
  return { handleCallApi };
};
