<template>
  <tr>
    <td>
      <label class="checkbox">
        <input type="checkbox" value="" data-toggle="checkbox">
      </label>
    </td>
    <td>{{task.title}}</td>
    <td class="td-actions text-right">
      <div class="table-icons">
        <button type="button"
                rel="tooltip"
                title="Edit Task"
                class="btn btn-info btn-simple btn-xs"
                @click="handleEditClick">
          <i class="ti-pencil-alt"></i>
        </button>
        <button type="button"
                rel="tooltip"
                title="Remove"
                class="btn btn-danger btn-simple btn-xs"
                @click="handleDeleteClick">
          <i class="ti-close"></i>
        </button>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => {
        return {
          title: ''
        };
      }
    },
    index: Number
  },
  methods: {
    handleEditClick() {
      this.$emit('on-edit', this.index);
    },
    handleDeleteClick() {
      this.$emit('on-delete', this.index);
    }
  }
};
</script>
<style>
</style>
