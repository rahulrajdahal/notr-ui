import { css } from "@emotion/react";
import React from "react";

const baseStyles = css`
  outline: none;
  border: none;
`;

export interface DebounceInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /** Value of the input. */
  value: string | number;
  /** OnChange handler. Update value when changed.*/
  onChange: (value: string | number) => void;
  /** time for input delay in milliseconds.*/
  debounce?: number;
}

const DebounceInput = React.forwardRef<HTMLInputElement, DebounceInputProps>(
  ({ debounce, value: initialValue, onChange, ...props }, ref) => {
    const [value, setValue] = React.useState(initialValue);

    React.useEffect(() => setValue(initialValue), [initialValue]);

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value);
      }, debounce);

      return () => clearTimeout(timeout);
    }, [debounce, onChange, value]);

    return (
      <input
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        css={baseStyles}
        {...props}
      />
    );
  }
);

DebounceInput.displayName = "DebounceInput";

export default DebounceInput;
