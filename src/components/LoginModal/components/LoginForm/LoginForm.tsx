import { Button, CheckBox, Form, Input, Link } from "@/components/Elements";
import { EMailIcon, EyeIcon, KeyIcon } from "@/constants";

export const LoginForm = () => {
  return (
    <Form className="flex flex-col gap-3">
      <h3 className="text-center">Log in to Tech Heim</h3>
      <Input
        startIcon={<EMailIcon />}
        placeholder="E-mail"
      />
      <Input
        startIcon={<KeyIcon />}
        placeholder="Password"
        endIcon={<EyeIcon />}
      />
      <Link className="justify-end text-primary-100 hover:text-Primary">
        Forgot Password?
      </Link>
      <CheckBox
        inputID="save-login"
        endLabel="Keep me logged in"
      />
      <Button>Log In</Button>
    </Form>
  );
};
