<template>
  <span v-if="error && error.length">
    <small class="now-ui-error" v-text="error[0]" />
  </span>
</template>

<script>
export default {
  name: "validation-error",
  props: {
    error: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.now-ui-error {
  position: relative;
  bottom: 25px;
  color: #fb6340;
}
</style>
