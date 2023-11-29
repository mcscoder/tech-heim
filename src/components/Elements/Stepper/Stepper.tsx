import { BagHappyIcon, CardIcon, TruckIcon } from "@/constants";
import { useLocation } from "react-router-dom";

export interface StepperVariants {
  cart: React.ReactNode;
  checkout: React.ReactNode;
  payment: React.ReactNode;
}

export type StepperVariantTypes = keyof StepperVariants;

const stepperIcon: StepperVariants = {
  cart: <BagHappyIcon />,
  checkout: <TruckIcon />,
  payment: <CardIcon />,
};

const stepperText: StepperVariants = {
  cart: "Cart",
  checkout: "Checkout",
  payment: "Payment",
};

const stepperIconStyle = {
  done: "border-primary-75 bg-primary-75 text-white",
  current: "border-Primary text-Primary",
  rest: "border-gray-e9e bg-gray-e9e text-white",
};

export type StepperProps = {
  variant: StepperVariantTypes;
};

export const Stepper = ({ variant }: StepperProps) => {
  const location = useLocation();
  const currentVariant: StepperVariantTypes = location.pathname
    .split("/")
    .pop()! as StepperVariantTypes;

  const lineClasses = "h-[2px] w-[100px]";
  const startLineClasses = `${lineClasses} ${
    currentVariant === "payment" ? "bg-primary-75" : "bg-gray-e9e"
  }`;
  const endLineClasses = `${lineClasses} ${
    currentVariant !== "cart" ? "bg-primary-75" : "bg-gray-e9e"
  }`;

  let isDone: boolean = false;
  let isCurrent: boolean = false;
  if (variant === "cart") {
    if (currentVariant === "cart") {
      isCurrent = true;
    } else {
      isDone = true;
    }
  } else if (variant === "checkout") {
    if (currentVariant === "checkout") {
      isCurrent = true;
    } else if (currentVariant === "payment") {
      isDone = true;
    }
  } else {
    if (currentVariant === "payment") {
      isCurrent = true;
    }
  }

  const iconClasses = `inline-flex relative p-2 rounded-full border-2 ${
    isDone
      ? stepperIconStyle.done
      : isCurrent
      ? stepperIconStyle.current
      : stepperIconStyle.rest
  }`;

  const textClasses = `absolute top-[110%] left-[-100%] right-[-100%] text-center font-caption-lg ${
    isDone ? "text-primary-75" : isCurrent ? "text-Primary" : "text-gray-e9e"
  }`;

  return (
    <div className="flex items-center">
      {variant === "payment" && <div className={startLineClasses}></div>}
      <div className={iconClasses}>
        {stepperIcon[variant]}
        <p className={textClasses}>{stepperText[variant]}</p>
      </div>
      {variant === "cart" && <div className={endLineClasses}></div>}
    </div>
  );
};
