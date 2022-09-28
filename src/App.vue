<template>
  <header-view title="Fullstack CRUD"></header-view>
  <router-view></router-view>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
export default {
  name: "App",
  components: {
    HeaderView,
  },
};
</script>
