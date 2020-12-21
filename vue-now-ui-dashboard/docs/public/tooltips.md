# Tooltips

<hr>

We used, [Tooltips from Element UI](http://element.eleme.io/#/en-US/component/tooltip) and customized the look of it.
It's a really handy component and can be integrated very easily. 
The Tooltip and Popover components are initialised globally in `src/globalComponents.js`


```js
import {Tooltip} from 'element-ui'
```
Global usage
```js
Vue.use(Tooltip)
```
Local usage
```js
export default {
  components: {
    [Tooltip.name]: Tooltip
  }
}
```

### Simple tooltip
```html
/*vue*/
<desc>
</desc>
<template>
 <el-tooltip content="Info"
             :open-delay="300"
             placement="top">
     <n-button>
       Top
     </n-button>
  </el-tooltip>
</template>

<script>
  export default {}
</script>
```
