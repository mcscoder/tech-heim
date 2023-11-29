import { useState } from "react";
import { MethodOption, MethodOptionObject } from ".";

export interface MethodProps {
  methodOptions: MethodOptionObject[];
}

export const Method = ({ methodOptions }: MethodProps) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <section className="flex flex-col gap-2">
      {methodOptions.map((item, index) => {
        return (
          <MethodOption
            key={index}
            title={item.title}
            isSelected={selected === index}
            handleSelecting={() => setSelected(index)}
          />
        );
      })}
    </section>
  );
};
