
# Input

## Usage

Notr Input

```tsx
import Input from '@rahulrajdahal/notr-input'

return <Input label="Notr Input"/>
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
<td>label</td>
<td> string</td>
<td>-</td>
</tr>
<tr>
<td>errors</td>
<td>string[]</td>
<td>-</td>
</tr>
<tr>
<td>labelProps</td>
<td>ReactComponentProps</td>
<td>-</td>
</tr>
<tr>
<td>inputProps</td>
<td>ReactComponentProps</td>
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
import InputContainer from './InputContainer.tsx'
import Input from '@rahulrajdahal/notr-input'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(InputContainer))
})

</script>
