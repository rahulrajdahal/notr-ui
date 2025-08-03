import { css } from "@emotion/react";
import { colors } from "@rahulrajdahal/notr-core";
import React from "react";

const baseStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.37rem;
  border: none;
  outline: none;
`;
const labelBaseStyles = css`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  opacity: 0.77;
  color: var(--color-gray-300);
`;
const inputBaseStyles = css`
  height: 3.75rem;
  border-radius: 0.8125rem;
  border: 1px solid var(--color-gray-600);
  padding: 0 0.5rem;
  outline: none;

  &:focus {
    border-color: var(--color-primary-600);
  }
`;
const errorBaseStyles = css`
  font-size: 0.875rem;
  color: var(--color-red-600);
  font-style: italic;
`;
const errorInputStyle = css`
  border-color: var(--color-red-600);
`;

export interface InputProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** Props for the input label component */
  labelProps?: React.ComponentProps<"label">;
  /** Props for the input component */
  inputProps?: React.ComponentProps<"input">;
  /** Label of the input*/
  label: string;
  /** Collection of input errors*/
  errors?: string[];
}

const Input = React.forwardRef<HTMLFieldSetElement, InputProps>(
  ({ label, errors, labelProps, inputProps, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        style={
          {
            "--color-primary-600": colors.primary[600],
            "--color-gray-400": colors.gray[400],
            "--color-gray-600": colors.gray[600],
            "--color-red-600": colors.red[600],
          } as React.CSSProperties
        }
        css={baseStyles}
        {...props}
      >
        <label css={labelBaseStyles} htmlFor={inputProps?.name} {...labelProps}>
          {label}
        </label>
        <input
          css={css`
            ${inputBaseStyles} ${errors && errors.length > 0
              ? errorInputStyle
              : ""}
          `}
          {...inputProps}
        />
        {errors &&
          errors.length > 0 &&
          errors.map((error) => (
            <span key={error} css={errorBaseStyles}>
              {error}
            </span>
          ))}
      </fieldset>
    );
  }
);

Input.displayName = "Input";

export default Input;
