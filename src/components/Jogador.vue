<template>
    <div class="row">
        <div class="col-1" v-if="dado.id" v-text="dado.id"></div>
        <div class="col-3" v-if="dado.nome" v-text="dado.nome"></div>
        <div class="col-1">
            <i class="bi-check2-square" style="cursor: pointer"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Jogador',
    props: {
        dado: Object
    }
}
</script>