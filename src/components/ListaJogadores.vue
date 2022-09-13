<template>
    <div>
        <jogador v-for="(dado, indice) in dados" :key="indice" :dado="dado" :tipo="tipo"/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Jogador from '@/components/Jogador.vue'

export default {
    name: 'ListaJogadores',
    props: {
        tipo: String
    },
    components: {
        Jogador
    },
    computed: {
        ...mapState({
            goleiros: state => state.jogadores.goleiros,
            zagueiros: state => state.jogadores.zagueiros,
            laterais: state => state.jogadores.laterais,
            meias: state => state.jogadores.meias,
            atacantes: state => state.jogadores.atacantes
        }),
        dados() {
            switch(this.tipo) {
                case 'goleiros': return this.goleiros
                case 'zagueiros': return this.zagueiros
                case 'laterais': return this.laterais
                case 'meias': return this.meias
                case 'atacantes': return this.atacantes
            }
            return []
        }
    }
}
</script>