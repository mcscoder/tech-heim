import { getUsers } from "@/api/Auth";
import { Button, CheckBox, Form, Input, Link } from "@/components/Elements";
import { EMailIcon, EyeIcon, KeyIcon } from "@/constants";
import { AuthContext } from "@/contexts";
import { login, resetError } from "@/redux";
import { AuthTypes } from "@/types";
import { useContext, useEffect, useRef } from "react";

export const LoginForm = () => {
  const context = useContext(AuthContext);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    context?.authDispatch(resetError());
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailInputRef.current?.value || "";
    const password = passwordInputRef.current?.value || "";

    getUsers().then((users: AuthTypes.User[]) => {
      const user =
        users.find(
          (user: AuthTypes.User) =>
            user.email === email && user.password === password
        ) || null;
      context?.authDispatch(login(user));
    });
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-3"
      error={context?.authState.error}
    >
      <h3 className="text-center">Log in to Tech Heim</h3>
      <Input
        startIcon={<EMailIcon />}
        placeholder="E-mail"
        ref={emailInputRef}
        required
      />
      <Input
        startIcon={<KeyIcon />}
        placeholder="Password"
        endIcon={<EyeIcon />}
        type="password"
        ref={passwordInputRef}
        required
      />
      <Link className="justify-end text-primary-100 hover:text-Primary">
        Forgot Password?
      </Link>
      <CheckBox
        inputID="save-login"
        endLabel="Keep me logged in"
      />
      <Button type="submit">Log In</Button>
    </Form>
  );
};
