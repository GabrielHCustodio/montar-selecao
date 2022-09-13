<template>
    <div class="row">
        <div class="col-1" v-if="dado.id" v-text="dado.id"></div>
        <div class="col-4" v-if="dado.nome" v-text="dado.nome"></div>
        <div class="col-1">
            <i class="bi-check2-square" style="cursor: pointer" @click="addJogador"></i>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Jogador',
    props: {
        tipo: String,
        dado: Object
    },
    methods: {
        ...mapMutations(['setEscalacao']),
        addJogador() {
            let jogador =  {
                tipo: this.tipo,
                dados: this.dado
            }
            console.log(jogador)
            this.setEscalacao(jogador)
        }
    }
}
</script>