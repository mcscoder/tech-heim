import { userLoginAuth, userRegisterAuth } from "@/api/Auth";
import { Button, CheckBox, Form, Input, Link } from "@/components/Elements";
import { EMailIcon, EyeIcon, KeyIcon, UserIcon } from "@/constants";
import { AuthContext } from "@/contexts";
import { register, resetError } from "@/redux";
import { AuthTypes } from "@/types";
import { useContext, useEffect, useRef } from "react";

export const RegisterForm = () => {
  const context = useContext(AuthContext);

  const fullNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    context?.authDispatch(resetError());
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = fullNameInputRef.current?.value || "";
    const email = emailInputRef.current?.value || "";
    const password = passwordInputRef.current?.value || "";

    userLoginAuth({ email: email, password: password }).then(
      (users: AuthTypes.User[]) => {
        const user = users[0] || null;
        // if user is present that mean user is exists
        if (user) {
          context?.authDispatch(register(null));
          return;
        }
        // if not we send a post request to create new user
        userRegisterAuth({
          fullName: fullName,
          email: email,
          password: password,
        }).then((user: AuthTypes.User) => {
          context?.authDispatch(register(user));
        });
      }
    );
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-3"
      error={context?.authState.error}
    >
      <h3 className="text-center">Create your account</h3>
      <Input
        startIcon={<UserIcon />}
        placeholder="Full Name"
        ref={fullNameInputRef}
        required
      />
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
        ref={passwordInputRef}
        type="password"
        required
      />
      <div className="flex items-center gap-2">
        <CheckBox
          inputID="agree-term"
          endLabel="I agree to all"
          required
        />
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
