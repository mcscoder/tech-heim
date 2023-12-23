import { Button, CheckBox, Form, Input, Link } from "@/components/Elements";
import { EMailIcon, EyeIcon, KeyIcon, UserIcon } from "@/constants";
import { useAuthContext } from "@/hooks";
import { register, resetError } from "@/redux";
import { AuthTypes } from "@/types";
import { handleEmailFormat, handleShowPassword } from "@/utils";
import { useEffect, useRef } from "react";

export const RegisterForm = () => {
  const { authState, authDispatch, handleUserRegister } = useAuthContext();

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rePasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    authDispatch(resetError());
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = firstNameInputRef.current?.value || "";
    const lastName = lastNameInputRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const rePassword = rePasswordRef.current?.value || "";

    const userRegister: AuthTypes.UserRegister = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(userRegister);

    if (password !== rePassword) {
      authDispatch(register(false, "Password doesn't match"));
      return;
    }

    // Handle request to the server
    handleUserRegister(userRegister);
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-3"
      error={authState.register.error}
    >
      <h3 className="text-center">Create your account</h3>
      <div className="flex gap-2">
        <Input
          label="First name"
          startIcon={<UserIcon />}
          placeholder="First name"
          ref={firstNameInputRef}
          required
        />
        <Input
          label="Last name"
          startIcon={<UserIcon />}
          placeholder="Last name"
          ref={lastNameInputRef}
          required
        />
      </div>
      <Input
        label="E-mail"
        startIcon={<EMailIcon />}
        placeholder="E-mail"
        ref={emailRef}
        required
        onChange={(e) => handleEmailFormat(e, emailRef)}
      />
      <Input
        label="Password"
        startIcon={<KeyIcon />}
        placeholder="Password"
        endIcon={<EyeIcon />}
        onEndIconClick={() => handleShowPassword(passwordRef)}
        ref={passwordRef}
        type="password"
        required
      />
      <Input
        label="Re-type password"
        startIcon={<KeyIcon />}
        placeholder="Password"
        endIcon={<EyeIcon />}
        onEndIconClick={() => handleShowPassword(rePasswordRef)}
        ref={rePasswordRef}
        type="password"
        required
      />
      <div className="flex items-center gap-2">
        <CheckBox
          inputID="agree-term"
          required
        />
        <label
          htmlFor="agree-term"
          className="font-body-md text-gray-71 cursor-pointer"
        >
          I agree to all
        </label>
        <Link
          to="#"
          className="text-Primary font-underline-primary"
        >
          Terms & Conditions
        </Link>
      </div>
      <Button type="submit">Create Account</Button>
    </Form>
  );
};
