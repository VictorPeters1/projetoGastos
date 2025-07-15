import { defineStore } from 'pinia'

export const useReceitasStore = defineStore('receitas', {
  state: () => ({
    listaReceitas: []
  }),
  actions: {
    adicionarReceita(receita) {
      this.listaReceitas.push({ ...receita })
    },
    removerReceita(index) {
      this.listaReceitas.splice(index, 1)
    },
    limparReceitas() {
      this.listaReceitas = []
    }
  },
  getters: {
    totalReceitas: (state) => {
      return state.listaReceitas.reduce((acc, r) => acc + Number(r.valor), 0)
    }
  }
})
