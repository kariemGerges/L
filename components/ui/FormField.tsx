import type { ReactNode } from "react";
import { errorClassName, labelClassName } from "@/components/ui/form-styles";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

export function FormField({ id, label, error, required, children }: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
        {required && (
          <span className="text-accent-gold" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className={errorClassName}>
          {error}
        </p>
      )}
    </div>
  );
}

export function fieldAriaProps(id: string, error?: string) {
  return {
    id,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
}
