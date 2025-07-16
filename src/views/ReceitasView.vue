<script setup>
import { ref } from 'vue'
import { useReceitasStore } from '@/stores/receitas'

const receita = ref({
  tipo: '',
  descricao: '',
  valor: null
})

const receitasStore = useReceitasStore()

const adicionarReceita = () => {
  receitasStore.adicionarReceita(receita.value)
  limparFormulario()
}

const limparFormulario = () => {
  receita.value = {
    tipo: '',
    descricao: '',
    valor: null
  }
}

const removerReceita = (index) => {
  receitasStore.removerReceita(index)
}
</script>

<template>
  <section>
    <h2>Receitas</h2>

    <form @submit.prevent="adicionarReceita">
      <label for="tipo">Tipo de receita:</label>
      <select v-model="receita.tipo" id="tipo" required>
        <option disabled value="">-- Selecione --</option>
        <option value="fixa">Fixa</option>
        <option value="variavel">Variável</option>
      </select>

      <label for="descricao">Descrição:</label>
      <input v-model="receita.descricao" id="descricao" required />

      <label for="valor">Valor:</label>
      <input v-model.number="receita.valor" id="valor" type="number" min="0" required />

      <div class="flex-buttons">
        <button type="submit">Adicionar Receita</button>
        <button type="button" @click="limparFormulario">Limpar</button>
      </div>
    </form>

    <div v-if="receitasStore.listaReceitas.length" class="tabela">
      <h3>Receitas Adicionadas</h3>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in receitasStore.listaReceitas" :key="index">
            <td>{{ item.tipo }}</td>
            <td>{{ item.descricao }}</td>
            <td>R$ {{ item.valor.toFixed(2) }}</td>
            <td><button class="btn-excluir" @click="removerReceita(index)">Excluir</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>

</style>
