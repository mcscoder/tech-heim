import { Button, CheckBox, Form, Input, Link } from "@/components/Elements";
import { EMailIcon, EyeIcon, KeyIcon, UserIcon } from "@/constants";

export const RegisterForm = () => {
  return (
    <Form className="flex flex-col gap-3">
      <h3 className="text-center">Create your account</h3>
      <Input
        startIcon={<UserIcon />}
        placeholder="Full Name"
      />
      <Input
        startIcon={<EMailIcon />}
        placeholder="E-mail"
      />
      <Input
        startIcon={<KeyIcon />}
        placeholder="Password"
        endIcon={<EyeIcon />}
      />
      <div className="flex items-center gap-2">
        <CheckBox
          inputID="agree-term"
          endLabel="I agree to all"
        />
        <Link
          to="#"
          className="text-Primary font-underline-primary"
        >
          Terms & Conditions
        </Link>
      </div>
      <Button>Log In</Button>
    </Form>
  );
};
