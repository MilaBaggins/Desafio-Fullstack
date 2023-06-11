import { FieldError } from "react-hook-form";
import { StyledInput } from "./style";
import { InputHTMLAttributes } from "react";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | React.ReactNode | any;
  type?: string;
  username?: string;
  register?: object;
  children?: React.ReactNode;
}

export const Input = ({
  children,
  type,
  name,
  register,
  error,
}: iInputProps) => {
  return (
    <StyledInput>
      {children}
      <input
        className={error && "input-error"}
        type={type}
        {...register}
        required={true}
      />
      <span>{name}</span>
      {error && (
        <p className="caption" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledInput>
  );
};
