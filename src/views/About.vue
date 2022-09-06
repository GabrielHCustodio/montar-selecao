<template>
  <div>
    <nav-header />
    <add-players />
  </div>
</template>

<script>
import AddPlayers from "@/components/AddPlayers.vue"
import NavHeader from "@/components/Header.vue"

export default {
  name: 'About',
  components: {
    AddPlayers,
    NavHeader
  }
}
</script>
