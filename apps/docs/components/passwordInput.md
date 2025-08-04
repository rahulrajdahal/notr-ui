# Password Input

## Usage

Notr Password Input

```tsx
import { PasswordInput } from "@rahulrajdahal/notr-passwordInput";

return <PasswordInput label="Notr Password Input" />;
```

## Props

| Props          |         Type          | Default |
| -------------- | :-------------------: | ------: |
| label          |       `string`        |       - |
| forgotPassword |       `object`        |       - |
| errors         |      `string[]`       |       - |
| labelProps     | `ReactComponentProps` |       - |
| inputProps     | `ReactComponentProps` |       - |

## Example

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import PasswordInputContainer from './PasswordInputContainer.tsx'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(PasswordInputContainer))
})

</script>
