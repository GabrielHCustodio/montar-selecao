import { createStore } from 'vuex'

export default createStore({
  state: {
    escalacao: {
      "goleiro": [
        { "id": 1, "nome": "Alisson" },
      ],
      "zagueiros": [
        { "id": 3, "nome": "Thiago Silva" },
        { "id": 4, "nome": "Marquinhos" }
      ],
      "laterais": [
        { "id": 2, "nome": "Danilo" },
        { "id": 6, "nome": "Alex Sandro" }
      ],
      "meias": [
        { "id": 5, "nome": "Casemiro" },
        { "id": 18, "nome": "Fabinho" },
        { "id": 10, "nome": "Lucas Paquetá" }
      ],
      "atacantes": [
        { "id": 11, "nome": "Neymar" },
        { "id": 20, "nome": "Vinícius Júnior" },
        { "id": 17, "nome": "Raphinha" }
      ]
    },
    jogadores: {
      "goleiros": [
        { "id": 1, "nome": "Alisson" },
        { "id": 12, "nome": "Ederson" },
        { "id": 23, "nome": "Weverton" }
      ],
      "zagueiros": [
        { "id": 3, "nome": "Thiago Silva" },
        { "id": 4, "nome": "Marquinhos" },
        { "id": 13, "nome": "Eder Militão" },
        { "id": 25, "nome": "Gabriel Magalhães" }
      ],
      "laterais": [
        { "id": 2, "nome": "Danilo" },
        { "id": 14, "nome": "Emerson Royal" },
        { "id": 6, "nome": "Alex Sandro" },
        { "id": 16, "nome": "Alex Telles" }
      ],
      "meias": [
        { "id": 5, "nome": "Casemiro" },
        { "id": 18, "nome": "Fabinho" },
        { "id": 8, "nome": "Fred" },
        { "id": 15, "nome": "Bruno Guimarães" },
        { "id": 10, "nome": "Lucas Paquetá" },
        { "id": 21, "nome": "Everton Ribeiro" }
      ],
      "atacantes": [
        { "id": 11, "nome": "Neymar" },
        { "id": 20, "nome": "Vinícius Júnior" },
        { "id": 17, "nome": "Raphinha" },
        { "id": 7, "nome": "Antony" },
        { "id": 22, "nome": "Rodrygo" },
        { "id": 19, "nome": "Richarlison" },
        { "id": 9, "nome": "Gabriel Jesus" }
      ]
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
