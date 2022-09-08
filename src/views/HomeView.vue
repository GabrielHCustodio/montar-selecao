<template>
<div>
  <nav-header />
  <list-player />
</div>
</template>

<script>
import ListPlayer from '@/components/ListPlayer.vue'
import NavHeader from "@/components/Header.vue";
export default {
  name: "HomeView",
  components: {
    ListPlayer,
    NavHeader
  }
};
</script>
