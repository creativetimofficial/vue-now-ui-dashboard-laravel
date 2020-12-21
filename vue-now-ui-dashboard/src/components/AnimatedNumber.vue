<template>
  <span>{{animatedNumber}}</span>
</template>
<script>
import TWEEN from 'tween.js';

export default {
  props: {
    value: {
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      animatedNumber: 0
    };
  },
  methods: {
    initAnimation(newValue, oldValue) {
      let vm = this;

      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }

      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, this.duration)
        .onUpdate(function() {
          vm.animatedNumber = this.tweeningNumber.toFixed(0);
        })
        .start();

      animate();
    }
  },
  mounted() {
    this.initAnimation(this.value, 0);
  },
  watch: {
    value(newValue, oldValue) {
      this.initAnimation(newValue, oldValue);
    }
  }
};
</script>
<style>
</style>
