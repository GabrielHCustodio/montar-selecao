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
          <jogadores />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jogadores from '@/components/Jogadores.vue'

export default {
  name: "Home",
  components: {
    Jogadores
  }
};
</script>
