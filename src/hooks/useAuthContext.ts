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
    const response = await axios.post(requestURL, user);
    return response;
  };

  const userRegisterAuth = async (user: AuthTypes.UserRegister) => {
    const requestURL = getRequestURL("signup");
    const response = await axios.post(requestURL, user);
    return response;
  };

  const getUserData = async () => {
    const requestURL = getRequestURL("user");
    const response = await axios.get(requestURL, {
      headers: { token: getToken().token },
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

  const handleChangeUserFullName = (userFullName: AuthTypes.UserFullName) => {
    handleCallApi(async () => {
      try {
        const url = getRequestURL("updateUsername");
        await axios.post(url, userFullName, {
          headers: {
            token: getToken().token,
          },
        });
        const userDataResponse = await getUserData();
        authDispatch(login(userDataResponse.data));
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleChangePhoneNumber = (phoneNumber: { phoneNumber: string }) => {
    handleCallApi(async () => {
      try {
        const url = getRequestURL("updatePhoneNumber");
        await axios.post(url, phoneNumber, {
          headers: {
            token: getToken().token,
          },
        });
        const userDataResponse = await getUserData();
        authDispatch(login(userDataResponse.data));
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleChangeAddress = (address: { address: string }) => {
    handleCallApi(async () => {
      try {
        const url = getRequestURL("updateAddress");
        await axios.post(url, address, {
          headers: {
            token: getToken().token,
          },
        });
        const userDataResponse = await getUserData();
        authDispatch(login(userDataResponse.data));
      } catch (error) {
        console.log(error);
      }
    });
  };

  return {
    authState,
    authDispatch,
    handleUserLogin,
    handleTokenLogin,
    handleUserRegister,
    handleChangeUserFullName,
    handleChangePhoneNumber,
    handleChangeAddress,
  };
};
