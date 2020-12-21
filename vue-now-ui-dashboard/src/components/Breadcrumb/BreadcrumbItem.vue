<template>
  <li class="breadcrumb-item" :class="{active: active}">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'breadcrumb-item',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style>
</style>
