# Inputs

<hr>

To use the custom form group inputs you need to import the custom made component:

```js
import {FormGroupInput as FgInput} from 'src/components'
```

Global usage

```js
Vue.component(FgInput)
```

For local usage
```js
export default {
  components: {
    FgInput
  }
}
```

## Custom form gorup inputs
The form group input component makes use of Vue's [InheritAttrs feature](https://vuejs.org/v2/api/#inheritAttrs) which basically let's
you extend a component very easily. In this case, form group input will accept any [Input attributes](https://www.w3schools.com/tags/tag_input.asp)
as well as [Bootstrap input groups](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs2.asp) through slots. 

### Simple with v-model
```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <fg-input placeholder="Simple input with v-model binding" v-model="inputVal"></fg-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputVal: ''
      }
    }
  }
</script>
```

### Disabled
```html
/*vue*/
<desc>
</desc>
<template>
  <div>
    <fg-input placeholder="Disabled input" disabled></fg-input>
  </div>
</template>

<script>
  export default {
    
  }
</script>
```

### With icons
```html
/*vue*/
<desc>
 You can use `addonRight` and `addonLeft` slots to fully customize the addons.
</desc>
<template>
  <div class="row">
      <fg-input class="col-6"
                placeholder="Right icon" 
                addon-right-icon="fa fa-search">
      </fg-input>
      <fg-input  class="col-6"
                 placeholder="Left icon" 
                 addon-left-icon="fa fa-search">
      </fg-input>
  </div>
</template>
<script>
  export default {
    
  }
</script>

```

### Different native type
```html
/*vue*/
<desc>
</desc>
<template>
  <div class="row">
      <fg-input class="col-sm-6 col-12"
                label="Password"
                placeholder="Password"
                value="mypassword"
                type="password">
       </fg-input>
       <fg-input  class="col-sm-6 col-12"
                  label="Number"
                  placeholder="Number"
                  value="23"
                  type="search">
        </fg-input>
  </div>
</template>
<script>
  export default {
    
  }
</script>

```

### Success and error states
```html
/*vue*/
<desc>
</desc>
<template>
  <div class="row">
     <div class="col-12">
       <fg-input class="has-success" value="Success"></fg-input>
     </div>
     <div class="col-12">
       <fg-input class="has-danger" value="Error"></fg-input> 
    </div>
  </div>
</template>
<script>
  export default {}
</script>
```

### Without border
```html
/*vue*/
<desc>
</desc>
<template>
  <div class="row">
     <div class="col-12">
       <fg-input class="no-border form-control-lg"
                 placeholder="First Name..."
                 addon-left-icon="now-ui-icons users_circle-08">
        </fg-input>
     </div>
     <div class="col-12">
      <fg-input class="no-border form-control-lg"
                placeholder="Last Name..."
                addon-left-icon="now-ui-icons text_caps-small">
      </fg-input>
     </div>
  </div>
</template>
<script>
  export default {}
</script>
```


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | input value   | string  |       —        |     —     |
| label     | input label  | string  |       —        |     —     |
| addonRightIcon     | right icon for input (is overriden by addonRight slot)   | string  |       —        |     —     |
| addonLeftIcon     | left icon for input (is overriden by addonLeft slot)   | string  |       —        |     —     |
| error     | Error displayed below input. Usually used in combination with validation. Display only if it exists | string  |       —        |     —     |
| labelClasses     |  Css classes for the label | string  |       —        |     —     |
| inputClasses     |  Css classes for the input | string  |       —        |     —     |

!> **Note** You can also use any other [html input attributes](https://www.w3schools.com/html/html_form_attributes.asp).
They will be passed down to the input inside the component. However, if you replace the default slot which contains the input,
those attributes will be no longer sent to the input.


### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes (default for v-model) | the updated value |

!> **Note** You can also use any other input listeners (e.g focus, blur etc).

### Slots
| Name | Description |
|---------- |-------- |
|  default  | content for the form group input. By default it contains an input but you can replace it with another component (e.g select, date-picker) |
|  label  | content for input label |
|  addonLeft  | content for input left addon. Refer to bootstrap [form group inputs](https://getbootstrap.com/docs/4.0/components/input-group/)  |
|  addonRight  | content for input right addon. Refer to bootstrap [form group inputs](https://getbootstrap.com/docs/4.0/components/input-group/)  |
|  infoBlock  | additional text to be displayed below the input |
|  helpBlock  | additional text to be displayed below the info text. By default the input error is displayed as fallback in this slot  |
