# Debounce Input

## Usage

Notr Debounce Input

```tsx
import DebounceInput from "@rahulrajdahal/notr-debounceInput";

return <DebounceInput value="" onChange={(value) => console.log(value)} />;
```

## Props

| Props    |   Type   | Default |
| -------- | :------: | ------: |
| value    |  `string`  |       - |
| onChange | `function` |       - |
| delay | `number` |       500 |

## Example

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import DebounceInputContainer from './DebounceInputContainer.tsx'
import Input from '@rahulrajdahal/notr-input'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(DebounceInputContainer))
})

</script>
