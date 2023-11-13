import { useState } from "react";

export interface IconProps {
  primaryIcon: React.ReactNode;
  secondaryIcon: React.ReactNode;
}

export const Icon = ({ primaryIcon, secondaryIcon, ...props }: IconProps) => {
  const [isHover, setHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {!isHover ? primaryIcon : secondaryIcon}
    </div>
  );
};
