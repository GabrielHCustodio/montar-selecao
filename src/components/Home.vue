<template>
  <div>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Escalar seleção</a>
      </div>
    </nav>

    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <players />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Players from '@/components/Players.vue'

export default {
  name: "Home",
  components: {
    Players
  }
};
</script>
