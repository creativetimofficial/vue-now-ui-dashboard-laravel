<template>
  <div
    class="form-group"
    :class="[
      { 'input-group': hasIcon },
      { 'has-danger': error },
      { 'input-group-focus': focused },
      { 'has-label': label || $slots.label },
      { 'has-success': !error && touched },
    ]"
  >
    <slot name="label">
      <label v-if="label" :class="labelClasses">
        {{ label }}
        <span v-if="required">*</span>
      </label>
    </slot>

    <slot name="addonLeft">
      <div v-if="addonLeftIcon" class="input-group-addon input-group-prepend">
        <i :class="addonLeftIcon"></i>
      </div>
    </slot>
    <slot>
      <input
        :value="value"
        v-on="listeners"
        v-bind="$attrs"
        class="form-control"
        :class="[{ valid: value && !error }, inputClasses]"
        aria-describedby="addon-right addon-left"
      />
    </slot>
    <slot name="addonRight">
      <span v-if="addonRightIcon" class="input-group-addon input-group-append">
        <i :class="addonRightIcon"></i>
      </span>
    </slot>

    <slot name="infoBlock"></slot>
    <slot name="helpBlock">
      <div
        class="text-danger invalid-feedback"
        style="display: block"
        :class="{ 'mt-2': hasIcon }"
        v-if="error"
      >
        {{ error[0] }}
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "fg-input",
  props: {
    required: Boolean,
    label: String,
    error: Array,
    labelClasses: String,
    inputClasses: String,
    value: [String, Number],
    addonRightIcon: String,
    addonLeftIcon: String,
  },
  data() {
    return {
      touched: false,
      focused: false,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur,
      };
    },
    hasIcon() {
      const { addonRight, addonLeft } = this.$slots;
      return (
        addonRight !== undefined ||
        addonLeft !== undefined ||
        this.addonRightIcon !== undefined ||
        this.addonLeftIcon !== undefined
      );
    },
  },
  methods: {
    updateValue(evt) {
      let value = evt.target.value;
      if (!this.touched && value) {
        this.touched = true;
      }
      this.$emit("input", value);
    },
    onFocus(value) {
      this.focused = true;
      this.$emit("focus", value);
    },
    onBlur(value) {
      this.focused = false;
      this.$emit("blur", value);
    },
  },
};
</script>
<style>
</style>
