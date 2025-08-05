import { css } from "@emotion/react";
import { Lock, LockOpen } from "@meistericons/react";
import { colors } from "@rahulrajdahal/notr-core";
import { type InputProps } from "@rahulrajdahal/notr-input";
import React from "react";

const baseStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.37rem;
  align-items: start;
  border: none;
  outline: none;
`;
const labelContainerBaseStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;
const labelBaseStyles = css`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  opacity: 0.77;
  color: var(--color-gray-400);
`;
const forgotPasswordBaseStyles = css`
  color: var(--color-primary-600);
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`;
const inputContainerBaseStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-gray-600);
  padding: 0rem 0.5rem;
  outline: none;
  border-radius: 0.8125rem;
  height: 3.75rem;
  width: 100%;

  &:focus-within {
    border-color: var(--color-primary-600);
  }
`;

const inputBaseStyles = css`
  width: 100%;
  border: none;
  outline: none;
`;
const inputContainerErrorBaseStyles = css`
  border-color: var(--color-red-600);
`;
const togglePasswordBaseStyles = css`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-gray-600);
`;
const iconBaseStyles = css`
  width: 1rem;
  height: 1rem;
`;
const iconErrorBaseStyles = css`
  color: var(--color-red-600);
`;

const errorBaseStyles = css`
  font-size: 0.875rem;
  color: var(--color-red-600);
  font-style: italic;
`;

export interface PasswordInputProps extends InputProps {
  /** Add Forgot Password link */
  forgotPassword?: {
    /** url to forgot password */
    href: string;
  };
}

const Input = React.forwardRef<HTMLFieldSetElement, PasswordInputProps>(
  ({ label, errors, labelProps, inputProps, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

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
        <div css={labelContainerBaseStyles}>
          <label
            htmlFor={inputProps?.name}
            css={labelBaseStyles}
            {...labelProps}
          >
            {label}
          </label>
          {props?.forgotPassword ? (
            <a href={props?.forgotPassword.href} css={forgotPasswordBaseStyles}>
              Forgot Password?
            </a>
          ) : null}
        </div>
        <div
          css={[
            inputContainerBaseStyles,
            errors && errors.length > 0 ? inputContainerErrorBaseStyles : null,
          ]}
        >
          <input
            aria-labelledby={label}
            aria-label={label}
            type={showPassword ? "text" : "password"}
            css={inputBaseStyles}
            {...inputProps}
          />
          <button
            type="button"
            title={showPassword ? "Hide" : "Show"}
            css={[
              togglePasswordBaseStyles,
              errors ? iconErrorBaseStyles : null,
            ]}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <LockOpen css={iconBaseStyles} />
            ) : (
              <Lock css={iconBaseStyles} />
            )}
          </button>
        </div>
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
