<template>
  <div>
    <div class="row">
      <h5>Escalar seleção</h5>
    </div>
    <div class="row">
      <div class="col">
        <div class="d-flex mb-3">
          <p class="col-2">Goleiro:</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(g, indice) in gol"
              :key="indice"
            >
              {{ g.id }} - {{ g.nome }}
            </li>
          </ul>
        </div>

        <div class="d-flex mb-3">
          <p class="col-2">Laterais:</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(l, indice) in lat"
              :key="indice"
            >
              {{ l.id }} - {{ l.nome }}
            </li>
          </ul>
        </div>

        <div class="d-flex mb-3">
          <p class="col-2">Zagueiros:</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(z, indice) in zag"
              :key="indice"
            >
              {{ z.id }} - {{ z.nome }}
            </li>
          </ul>
        </div>

        <div class="d-flex mb-3">
          <p class="col-2">Meias:</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(m, indice) in mei"
              :key="indice"
            >
              {{ m.id }} - {{ m.nome }}
            </li>
          </ul>
        </div>

        <div class="d-flex mb-3">
          <p class="col-2">Atacantes:</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(a, indice) in ata"
              :key="indice"
            >
              {{ a.id }} - {{ a.nome }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MontarEquipe",
  computed: {
    ...mapState({
      gol: (state) => state.escalacao.goleiro,
      zag: (state) => state.escalacao.zagueiros,
      lat: (state) => state.escalacao.laterais,
      mei: (state) => state.escalacao.meias,
      ata: (state) => state.escalacao.atacantes,
    }),
  },
};
</script>