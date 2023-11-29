import { Stepper } from "@/components/Elements";

export const StepperSection = () => {
  return (
    <section className="flex items-center justify-center">
      <Stepper variant="cart" />
      <Stepper variant="checkout" />
      <Stepper variant="payment" />
    </section>
  );
};
