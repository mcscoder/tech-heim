import { RegisterTab } from "..";

interface RegisterTabBarProps {
  state: boolean;
  onTabClick?: (state: boolean) => void;
}

export const RegisterTabBar = ({
  state,
  onTabClick = () => {},
}: RegisterTabBarProps) => {
  return (
    <div className="flex">
      <RegisterTab
        activeState={state}
        className="flex-1"
        onClick={() => {
          onTabClick(true);
        }}
      >
        Login
      </RegisterTab>
      <RegisterTab
        activeState={!state}
        className="flex-1"
        onClick={() => {
          onTabClick(false);
        }}
      >
        Register
      </RegisterTab>
    </div>
  );
};
