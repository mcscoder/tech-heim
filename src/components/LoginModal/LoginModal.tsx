import { useState } from "react";
import { Overlay } from "../Layouts";
import {
  LoginForm,
  OtherMethod,
  RegisterForm,
  RegisterTabBar,
} from "./components";

interface LoginModalProps {
  onClick?: () => void;
  className?: string;
}

export const LoginModal = ({
  className = "",
  onClick = () => {},
  ...props
}: LoginModalProps) => {
  const [loginTab, setLoginTab] = useState<boolean>(true);

  const loginModalClasses = `w-[600px] px-20 py-10 rounded-lg bg-white flex flex-col gap-6 ${className}`;

  return (
    <Overlay
      onClickClose={onClick}
      className="flex items-center justify-center"
    >
      <div
        className={loginModalClasses}
        {...props}
      >
        <RegisterTabBar
          state={loginTab}
          onTabClick={setLoginTab}
        />
        {loginTab ? <LoginForm /> : <RegisterForm />}
        <OtherMethod
          isLoginTab={loginTab}
          onClick={setLoginTab}
        />
      </div>
    </Overlay>
  );
};
