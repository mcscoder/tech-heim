import { Wrapper } from "@/components/Layouts";
import { StepperSection } from "./components";
import { Outlet } from "react-router-dom";

export const PaymentProcess = () => {
  return (
    <Wrapper className="gap-20 content-container my-16">
      <StepperSection />
      <Outlet />
    </Wrapper>
  );
};
