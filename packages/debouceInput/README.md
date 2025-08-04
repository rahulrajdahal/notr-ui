# Notr Debounce Input

Debounce Input component from notr-ui

## Installation

```bash
npm i @rahulrajdahal/notr-debounceInput
```

## Usage

```tsx
import { useState } from "react";
import { DebounceInput } from "@rahulrajdahal/notr-debounceInput";

export default function Component() {
  const [value, setValue] = useState("");

  return (
    <DebounceInput
      value={value}
      onChange={(val) => setValue(val)}
      delay={800}
    />
  );
}
```

## Props

| Prop     | Type              | Description                                      | Default |
| -------- | ----------------- | ------------------------------------------------ | ------- |
| value    | `string`          | Value for the input                              | -       |
| onChange | `function():void` | Callback function when the input changes         | -       |
| delay    | `number`          | delay _(in ms)_ for the onChange function to run | 500ms   |

Made with 💝 in Bhaktapur, Nepal
