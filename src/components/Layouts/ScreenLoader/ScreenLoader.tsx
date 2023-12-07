import { createContext, useContext, useState } from "react";

export interface ScreenLoaderContextProps {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const ScreenLoaderContext = createContext<ScreenLoaderContextProps>({
  loading: false,
  setLoading: () => {},
});

export interface ScreenLoaderProviderProps {
  children: React.ReactNode;
}

export const ScreenLoaderProvider = ({
  children,
}: ScreenLoaderProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ScreenLoaderContext.Provider value={{ loading, setLoading }}>
      {loading && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[9999] bg-black/70 flex items-center justify-center">
          <div className="border-l-4 border-l-Primary rounded-full w-32 h-32 animate-spin"></div>
          {/* <p className="text-[200px] text-gray-71 pointer-events-none">
            LOADING...
          </p> */}
          {/* <img
            src="src/assets/meme/th-ngu.png"
            alt=""
            className="animate-spin"
          /> */}
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
    setLoading(true);
    await apiCall();
    setLoading(false);
  };

  return { handleCallApi };
};
