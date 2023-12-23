import { useScreenLoader } from "@/components/Layouts";
import { AuthContext } from "@/contexts";
import { login, register } from "@/redux";
import { AuthTypes } from "@/types";
import { getRequestURL, getToken, removeToken, setToken } from "@/utils";
import axios from "axios";
import { useContext } from "react";

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }

  const { authState, authDispatch } = authContext;
  const { handleCallApi } = useScreenLoader();

  const userLoginAuth = async (user: AuthTypes.UserLogin) => {
    const requestURL = getRequestURL("login");
    const response = await axios.post(requestURL, user, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response;
  };

  const userRegisterAuth = async (user: AuthTypes.UserRegister) => {
    const requestURL = getRequestURL("signup");
    const response = await axios.post(requestURL, user, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return response;
  };

  const getUserData = async () => {
    const requestURL = getRequestURL("user");
    const response = await axios.get(requestURL, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
        token: getToken().token,
      },
    });
    return response;
  };

  const handleUserLogin = (user: AuthTypes.UserLogin) => {
    handleCallApi(async () => {
      try {
        // Get tokens via email and password
        const tokenResponse = await userLoginAuth(user);
        if (tokenResponse.status !== 200) {
          throw new Error("Login failed");
        }
        setToken(tokenResponse.data);

        // Get user data via token
        const userDataResponse = await getUserData();
        if (userDataResponse.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        authDispatch(login(userDataResponse.data));
      } catch (error) {
        // Login failed
        authDispatch(login(null));
        console.log(error);
      }
    });
  };

  const handleTokenLogin = () => {
    handleCallApi(async () => {
      try {
        const userDataResponse = await getUserData();
        if (userDataResponse.status !== 200) {
          throw new Error("Failed to fetch user data");
        }
        authDispatch(login(userDataResponse.data));
      } catch (error) {
        removeToken();
        console.log((error as Error).message);
      }
    });
  };

  const handleUserRegister = (user: AuthTypes.UserRegister) => {
    handleCallApi(async () => {
      try {
        // Post user data
        const registerResponse = await userRegisterAuth(user);
        if (registerResponse.status !== 201) {
          throw new Error("Email is exist");
        }
        authDispatch(register(true, null));
        location.reload();
      } catch (error: unknown) {
        console.log(error);
        authDispatch(register(false, (error as Error).message));
      }
    });
  };

  return {
    authState,
    authDispatch,
    handleUserLogin,
    handleTokenLogin,
    handleUserRegister,
  };
};
