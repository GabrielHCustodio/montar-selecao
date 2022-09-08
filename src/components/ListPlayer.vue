<template>
  <div class="container-list">
    <h1 id="title">Lista de jogadores</h1>
    <div class="container-table">
      <table id="table">
        <thead>
          <th>Nome do jogador</th>
          <th>Posição</th>
          <th>Clube</th>
        </thead>
        <tbody v-for="(p, index) in players" :key="index">
          <td>{{ p.name }}</td>
          <td>{{ p.position }}</td>
          <td>{{ p.club }}</td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ListPlayer",
  computed: {
    ...mapState({
      players: (state) => state.players,
    }),
  },
};
</script>

<style scoped>
.container-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#title {
    padding: 20px 0;
    font-size: 1.8rem;
}
.container-table {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#table {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

thead,
tbody {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

th,
td {
    width: 250px;
}

th {
    font-size: 1.2rem;
}

td {
    font-size: 1.1rem;
    text-align: center;
}
</style>
