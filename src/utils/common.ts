export const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const regex = /\D/g;
  e.target.value = e.target.value.replace(regex, "");
};

export const handleShowPassword = (ref: React.RefObject<HTMLInputElement>) => {
  const type = ref.current?.type;
  if (type) {
    if (type === "password") {
      ref.current.type = "text";
    } else {
      ref.current.type = "password";
    }
  }
};
