
# Button

Notr Button

## Usage

```tsx
import Button from '@rahulrajdahal/notr-button'

return <Button>Notr Button</Button>
```

## Props

<table>
<thead>
<tr>
<td>Props</td>
<td>Type</td>
<td>Default</td>
</tr>
</thead>

<tbody>
<tr>
<td>variant</td>
<td> <code>enum
<Tooltip position="top" backgroundColor="#6366f1">
  <template #trigger>
  ℹ️
  </template>
  <template #content>
   fill | outline | text
  </template>
</Tooltip>
</code>
</td>
<td>fill</td>
</tr>
<tr>
<td>background</td>
<td><code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td><code>string</code></td>
<td>-</td>
</tr>
</tbody>
</table>

## Example

<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import ButtonContainer from './ButtonContainer.tsx'
import Button from '@rahulrajdahal/notr-button'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(ButtonContainer))
})

</script>
