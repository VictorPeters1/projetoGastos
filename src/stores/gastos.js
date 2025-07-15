import { defineStore } from 'pinia'

export const useGastosStore = defineStore('gastos', {
  state: () => ({
    listaGastos: []
  }),
  actions: {
    adicionarGasto(gasto) {
      this.listaGastos.push({ ...gasto })
    },
    limparGastos() {
      this.listaGastos = []
    }
  },
  getters: {
    totalGastos: (state) => {
      return state.listaGastos.reduce((acc, gasto) => acc + Number(gasto.valor), 0)
    }
  }
})
