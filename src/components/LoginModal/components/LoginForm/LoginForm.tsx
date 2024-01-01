import {
  Button,
  ChangePasswordOverlay,
  Form,
  Input,
} from "@/components/Elements";
import { EMailIcon, EyeIcon, KeyIcon } from "@/constants";
import { useAuthContext } from "@/hooks";
import { resetError } from "@/redux";
import { AuthTypes } from "@/types";
import { handleEmailFormat, handleShowPassword } from "@/utils";
import { useEffect, useRef, useState } from "react";

export const LoginForm = () => {
  const { authState, authDispatch, handleUserLogin } = useAuthContext();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isForgetPassword, setForgetPassword] = useState<boolean>(false);

  useEffect(() => {
    authDispatch(resetError());
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get email and password
    const email = emailInputRef.current?.value || "";
    const password = passwordInputRef.current?.value || "";

    // Create user login object
    const userLogin: AuthTypes.UserLogin = {
      email: email,
      password: password,
    };

    // Handle request to the server
    handleUserLogin(userLogin);
  };

  return (
    <>
      {isForgetPassword && (
        <ChangePasswordOverlay onClickClose={() => setForgetPassword(false)} />
      )}
      <Form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-3"
        error={authState.login.error}
      >
        <h3 className="text-center">Log in to Tech Heim</h3>
        <Input
          label="E-mail"
          startIcon={<EMailIcon />}
          placeholder="E-mail"
          ref={emailInputRef}
          required
          onChange={(e) => handleEmailFormat(e, emailInputRef)}
        />
        <Input
          label="Password"
          startIcon={<KeyIcon />}
          placeholder="Password"
          endIcon={<EyeIcon />}
          onEndIconClick={() => handleShowPassword(passwordInputRef)}
          type="password"
          ref={passwordInputRef}
          required
        />
        <div className="flex justify-end">
          <Button
            variant="text"
            type="button"
            onClick={() => setForgetPassword(true)}
          >
            Forgot password ?
          </Button>
        </div>
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
};
