import { css } from "@emotion/react";
import { colors } from "@rahulrajdahal/notr-core";
import React from "react";

const baseStyles = css`
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.125rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    font-weight: 500;
    cursor: not-allowed;
  }
`;

const variants = {
  fill: css`
    border-radius: 0.8125rem;
    padding: 1.31rem;

    &:disabled {
      background-color: var(--color-gray-400) !important;
      color: #ffffff;
    }
  `,
  outline: css`
    border: 1px solid var(--color-primary-600);
    border-radius: 0.8125rem;
    padding: 1.31rem;

    &:disabled {
      border-color: var(--color-gray-400);
      color: var(--color-gray-400) !important;
    }
  `,
  text: css`
    &:hover {
      text-decoration: underline;
    }
    &:disabled {
      color: var(--color-gray-400) !important;
    }
  `,
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  background?: string;
  color?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "fill",
      disabled = false,
      // background = variant === "fill" && !disabled
      //   ? colors.primary[600]
      //   : undefined,
      color = variant === "fill" ? "#ffffff" : colors.primary[600],
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            backgroundColor:
              variant === "fill" && !disabled ? colors.primary[600] : undefined,
            color,
            "--color-primary-600": colors.primary[600],
            "--color-gray-400": colors.gray[400],
          } as React.CSSProperties
        }
        css={css`
          ${baseStyles} ${variants[variant]}
        `}
        className={className}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
