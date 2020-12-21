<template>
  <bread-crumb>
    <BreadCrumbItem v-for="(route, index) in $route.matched.slice()" :key="route.name" style="display:inline-block">
      <router-link :to="{name: route.name}" v-if="index < $route.matched.length - 1" class="breadcrumb-link">
        {{ route.name }}
      </router-link>
      <span v-else class="breadcrumb-current">{{route.name}}</span>
    </BreadCrumbItem>
  </bread-crumb>
</template>

<script>
import BreadCrumb from './Breadcrumb';
import BreadCrumbItem from './BreadcrumbItem';

export default {
  name: 'route-breadcrumb',
  components: {
    BreadCrumb,
    BreadCrumbItem
  },
  props: { root: String },
  methods: {
    getBreadName(route) {
      return route.name;
    }
  }
};
</script>

<style scoped>
</style>
