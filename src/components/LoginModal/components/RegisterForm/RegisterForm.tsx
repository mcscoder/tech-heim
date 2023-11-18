import { Button, CheckBox, Form, Input, Link } from "@/components/Elements";
import { EMailIcon, EyeIcon, KeyIcon, UserIcon } from "@/constants";
import { AuthContext } from "@/contexts";
import { useContext, useRef } from "react";

export const RegisterForm = () => {
  const context = useContext(AuthContext);

  const fullNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const fullName = fullNameInputRef.current?.value || "";
    // const email = emailInputRef.current?.value || "";
    // const password = passwordInputRef.current?.value || "";
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
