# Notr Password Input

Password Input component from notr-ui

## Installation

```bash
npm i @rahulrajdahal/notr-passwordInput
```

## Usage

```tsx
import { PasswordInput } from "@rahulrajdahal/notr-passwordInput";

export default function Component() {
  return <PasswordInput label={"Notr Input"} />;
}
```

## Props

| Prop           | Type                  | Description                              | Default |
| -------------- | --------------------- | ---------------------------------------- | ------- |
| label          | `string`              | Label for the input                      | -       |
| forgotPassword | `{href:string}`       | Link to navigate to forgot password page | -       |
| labelProps     | `ReactComponentProps` | Props component of label element         | -       |
| inputProps     | `ReactComponentProps` | Props component of label element         | -       |
| errors         | `string[]`            | Errors in the input component            | -       |

Made with 💝 in Bhaktapur, Nepal
