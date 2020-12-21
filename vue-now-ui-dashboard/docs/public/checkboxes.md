# Checkboxes

<hr>

To use the custom checkbox controls you need to import the custom made component:

```js
import {Checkbox} from 'src/components'
```

Global usage

```js
Vue.component(Checkobx.name, Checkbox)
```

For local usage
```js
export default {
  components: {
    [Checkbox.name]: Checkbox
  }
}
```

## Custom checkboxes

```html
/*vue*/
<desc>
</desc>
<template>
    <div>
       <n-checkbox v-model="unchecked">Unchecked</n-checkbox>
       <n-checkbox  v-model="checked">Checked</n-checkbox>

       <n-checkbox :disabled="true" :checked="false">Disabled unchecked</n-checkbox>
       <n-checkbox :disabled="true" :checked="true">Disabled checked</n-checkbox>
    </div>
</template>

<script>
  export default {
    data () {
        return {
          unchecked: false,
          checked: true
        }
      }
  }
</script>
```

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| checked     | checked value   | boolean  |       true/false        |     false     |
| disabled     | disables checkbox  | boolean  |       true/false        |     false     |
| inline     | allows inline of multiple checkboxes  | boolean  |       true/false        |     false     |

### Checkbox Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes | the updated value |

### Slots
| Name | Description |
|---------- |-------- |
|  default  | Default content for checkbox |
