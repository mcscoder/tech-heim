import { Message } from "..";

export interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  error?: string | null | undefined;
  success?: string | null | undefined;
  className?: string;
}

export const Form = ({
  onSubmit,
  children,
  error,
  success,
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
      {success && <Message variant="success">{success}</Message>}
      {children}
    </form>
  );
};
