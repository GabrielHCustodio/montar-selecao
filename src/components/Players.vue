<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-file-person me-2"></i>Jogadores</h5>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'players', params: { tipo: 'goleiros' } }"
              >Goleiros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'players', params: { tipo: 'zagueiros' } }"
              >Zagueiros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'players', params: { tipo: 'laterais' } }"
              >Laterais</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'players', params: { tipo: 'meio-campo' } }"
              >Meios campo</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'players', params: { tipo: 'atacantes' } }"
              >Atacantes</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span><router-view name="players" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Players",
};
</script>
