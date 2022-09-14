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

      <div class="row mt-3">
        <div class="col">
          <button type="button" id="confirmarEscalacao" class="btn btn-primary mb-3" @click="confEscalacao">
            Confirmar escalação
          </button>
        </div>

        <div class="col">
          <button type="button" class="btn btn-danger mb-3" @click="resetarEscalacao">
            Resetar escalação
          </button>
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
    })
  },
  methods: {
    confEscalacao() {
      if(this.validarEscalacao()) {
        let btn = document.getElementById('confirmarEscalacao')
        btn.classList.add('btn-success')
        btn.textContent = 'Escalação confirmada'
      }else {
        alert('Verifique se todos os campos foram completados corretamente.')
      }
    },
    validarEscalacao() {
      let valido = true
      if(this.gol.length < 1) valido = false
      if(this.zag.length < 2) valido = false
      if(this.lat.length < 2) valido = false
      if(this.mei.length < 3) valido = false
      if(this.ata.length < 3) valido = false
      return valido
    },
    resetarEscalacao() {
      let item = {
        "goleiro": [],
        "zagueiros": [],
        "laterais": [],
        "meias": [],
        "atacantes": []
      }

      this.$store.commit('resetEscalacao', item)

      let btn = document.getElementById('confirmarEscalacao')
        btn.classList.remove('btn-success')
        btn.textContent = 'Confirmar escalação'
      }
  }
};
</script>