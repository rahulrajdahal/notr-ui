import { css } from "@emotion/react";
import { colors } from "@rahulrajdahal/notr-core";
import React from "react";

const baseStyles = css`
  display: flex;
  height: 2.5rem;
  width: 100%;
  max-width: 10.25rem;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  gap: 0.44rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 0.875rem;
`;

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Prefix icon component */
  icon?: React.ReactNode;
  /** Number of items */
  count: number;
  /** Text content of Pill */
  text: string;
  /** Background color of Pill */
  background?: string;
  /** text color of Pill */
  color?: string;
}

const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  (
    {
      text,
      icon,
      count,
      background = colors.green[400],
      color = colors.green[600],
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        style={
          {
            backgroundColor: background,
            color,
            "--color-green-400": colors.green[400],
            "--color-green-600": colors.green[600],
          } as React.CSSProperties
        }
        css={baseStyles}
        {...props}
      >
        {icon} {count} task
        {count > 1 ? "s" : ""} {text}
      </span>
    );
  }
);

Pill.displayName = "Pill";

export default Pill;
