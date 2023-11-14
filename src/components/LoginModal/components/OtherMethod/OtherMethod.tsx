import { Button } from "@/components/Elements";
import { FacebookFilledIcon, GoogleIcon } from "@/constants";

interface OtherMethodProps {
  isLoginTab: boolean;
  onClick?: (state: boolean) => void;
}

export const OtherMethod = ({
  isLoginTab,
  onClick = () => {},
}: OtherMethodProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <div className="h-[1px] mt-[2px] flex-1 bg-gray-b4"></div>
        <p className="mx-2 font-button-lg">
          Or {isLoginTab ? "Log In" : "Sign Up"} with
        </p>
        <div className="h-[1px] mt-[2px] flex-1 bg-gray-b4"></div>
      </div>
      <div className="flex items-center gap-6">
        <Button
          variant="outlined"
          className="flex-1"
          startIcon={<GoogleIcon />}
        >
          Goggle
        </Button>
        <Button
          variant="outlined"
          className="flex-1"
          startIcon={<FacebookFilledIcon />}
        >
          Facebook
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <p className="font-body-md">
          {isLoginTab
            ? "Don't have an account ?"
            : "Already have an account ? "}
        </p>
        <Button
          onClick={() => onClick(!isLoginTab)}
          variant="text"
        >
          {isLoginTab ? "Sign Up" : "Log In"}
        </Button>
      </div>
    </div>
  );
};
