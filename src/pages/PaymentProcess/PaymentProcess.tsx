import { Wrapper } from "@/components/Layouts";
import { StepperSection } from "./components";
import { Outlet } from "react-router-dom";

export const PaymentProcess = () => {
  return (
    <Wrapper className="gap-10 content-container mt-10">
      <StepperSection />
      <Outlet />
    </Wrapper>
  );
};
