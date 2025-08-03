
# Button

Notr Button

```tsx
import Button from '@rahulrajdahal/notr-button'

return <Button>Notr Button</Button>
```

------------------------
<div ref="el" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import Container from './Container.tsx'
import Button from '@rahulrajdahal/notr-button'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(Container))
})

</script>
----

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
<td> enum
<Tooltip position="top" backgroundColor="#6366f1">
  <template #trigger>
  ℹ️
  </template>
  <template #content>
   fill | outline | text
  </template>
</Tooltip>
</td>
<td>fill</td>
</tr>
<tr>
<td>background</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
