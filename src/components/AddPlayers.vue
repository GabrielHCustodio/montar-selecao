<template>
  <div class="container">
    <h1 id="title">Criar convocação</h1>
    <div class="register-player">
      <div class="information">
        <label for="name">Nome do jogador</label>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          v-model="namePlayer"
        />
      </div>

      <div class="information">
        <label for="position">Posição</label>
        <select name="position" v-model="positionPlayer">
          <option value="Goleiro">Goleiro</option>
          <option value="Zagueiro">Zagueiro</option>
          <option value="Lateral">Lateral</option>
          <option value="Meio campo">Meio campo</option>
          <option value="Atacante">Atacante</option>
        </select>
      </div>

      <div class="information">
        <label for="club">Clube</label>
        <input
          type="text"
          name="club"
          placeholder="Clube"
          v-model="clubPlayer"
        />
      </div>
    </div>
    <div class="summon">
      <button @click="summon">Convocar</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "AddPlayers",
  data: () => ({
    namePlayer: "",
    positionPlayer: "",
    clubPlayer: "",
  }),
  methods: {
    ...mapMutations(['setPlayers']),
    summon() {
      let player = {
        name: this.namePlayer,
        position: this.positionPlayer,
        club: this.clubPlayer,
      };

      this.resetDataPlayer();

      this.setPlayers(player)
    },
    resetDataPlayer() {
      this.namePlayer = "",
      this.positionPlayer = "",
      this.clubPlayer = "";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#title {
  font-size: 2rem;
  padding: 40px 0;
  color: #04822c;
}

.register-player {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 30px 0;
  border-radius: 50px;
  background: #586ba0;
}

.information {
  display: flex;
  flex-direction: column;
}

.information label {
  font-size: 1.15rem;
  font-style: italic;
  font-weight: bolder;
  margin-bottom: 5px;
  text-align: center;
}

.information input,
.information select {
  width: 250px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
  font-size: 1rem;
  margin-bottom: 5px;
}

.summon {
  padding: 30px 0;
}

.summon button {
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 20px;
  font-size: 1.15rem;
  background: #04822c;
  color: #fff;
  cursor: pointer;
  transition: 0.7s;
}

.summon button:hover {
  opacity: 0.8;
}
</style>
