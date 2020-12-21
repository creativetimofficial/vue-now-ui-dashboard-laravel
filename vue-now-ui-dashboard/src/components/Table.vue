<template>
  <table class="table">
    <thead>
    <tr>
      <slot name="columns">
        <th v-for="column in columns" :key="column">{{column}}</th>
      </slot>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data"
        :key="index">
      <slot :row="item">
        <td v-for="column in columns"
            :key="column"
            v-if="hasValue(item, column)">
          {{itemValue(item, column)}}
        </td>
      </slot>
    </tr>
    <tr v-if="$slots['summary-row']">
      <slot name="summary-row"></slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'n-table',
  props: {
    columns: Array,
    data: Array
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== 'undefined';
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    }
  }
};
</script>
<style>
</style>
