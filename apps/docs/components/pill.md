# Pill

Notr Pill

## Usage

```tsx
import { Pill } from "@rahulrajdahal/notr-pill";

return <Pill text="Completed" count={3} />;
```

## Props

| Props       |    Type     |   Default |
| ----------- | :---------: | --------: |
| text\*      |  `string`   |         - |
| count\*     |  `number`   |         - |
| icon?       | `ReactNode` |         - |
| background? |  `string`   | #09c49733 |
| color?      |  `string`   |   #09c497 |

## Example

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import PillContainer from './PillContainer.tsx'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(PillContainer))
})

</script>
