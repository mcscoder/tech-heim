import { Message } from "..";

interface FormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  error?: string | null | undefined;
  className?: string;
}

export const Form = ({
  onSubmit,
  children,
  error,
  className,
  ...props
}: FormProps) => {
  return (
    <form
      action=""
      onSubmit={onSubmit}
      className={className}
      {...props}
    >
      {error && <Message variant="error">{error}</Message>}
      {children}
    </form>
  );
};
