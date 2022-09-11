<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-file-person me-3"></i>Jogadores</h5>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'posicao', params: { tipo: 'goleiros' } }"
              >Goleiros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'posicao', params: { tipo: 'zagueiros' } }"
              >Zagueiros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'posicao', params: { tipo: 'laterais' } }"
              >Laterais</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'posicao', params: { tipo: 'meio-campo' } }"
              >Meios campo</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'posicao', params: { tipo: 'atacantes' } }"
              >Atacantes</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col mt-2">
        <span><router-view name="posicao" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jogadores",
};
</script>