import { createStore } from 'vuex'

export default createStore({
  state: {
    players: []
  },
  getters: {
  },
  mutations: {
    setPlayers(state, player) {
      state.players.push(player)
    }
  },
  actions: {
  },
  modules: {
  }
})
