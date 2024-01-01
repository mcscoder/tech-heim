import { useState } from "react";

export const useBooleanState = (defaultValue?: boolean) => {
  const [state, setState] = useState<boolean>(defaultValue || false);

  return { state, setState };
};
