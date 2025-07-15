<script setup>
import { ref } from 'vue'
import { useGastosStore } from '@/stores/gastos'

const gasto = ref({
  tipo: '',
  descricao: '',
  valor: null
})

const gastosStore = useGastosStore()

const adicionarGasto = () => {
  gastosStore.adicionarGasto(gasto.value)
  limparFormulario()
}

const limparFormulario = () => {
  gasto.value = {
    tipo: '',
    descricao: '',
    valor: null
  }
}

const removerGasto = (index) => {
  gastosStore.removerGasto(index)
}
</script>

<template>
  <section>
    <h2>Gastos</h2>

    <div class="info">
      <h3>Tipos de Gastos</h3>
      <ul>
        <li><strong>Fixo:</strong> ocorre mensalmente e tem valor previsível (ex: aluguel, internet).</li>
        <li><strong>Supérfluo:</strong> não é essencial e pode ser reduzido (ex: delivery, roupas novas).</li>
        <li><strong>Inesperado:</strong> imprevistos (ex: remédio, conserto, emergência).</li>
      </ul>
    </div>

    <form @submit.prevent="adicionarGasto">
      <label for="tipo">Tipo de gasto:</label>
      <select v-model="gasto.tipo" id="tipo" required>
        <option disabled value="">-- Selecione --</option>
        <option value="fixo">Fixo</option>
        <option value="superfluo">Supérfluo</option>
        <option value="inesperado">Inesperado</option>
      </select>

      <label for="descricao">Descrição:</label>
      <input v-model="gasto.descricao" id="descricao" required />

      <label for="valor">Valor:</label>
      <input v-model.number="gasto.valor" id="valor" type="number" min="0" required />

      <div class="flex-buttons">
        <button type="submit">Adicionar Gasto</button>
        <button type="button" @click="limparFormulario">Limpar</button>
      </div>
    </form>

    <div v-if="gastosStore.listaGastos.length" class="tabela">
      <h3>Gastos Adicionados</h3>
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
          <tr v-for="(item, index) in gastosStore.listaGastos" :key="index">
            <td>{{ item.tipo }}</td>
            <td>{{ item.descricao }}</td>
            <td>R$ {{ item.valor.toFixed(2) }}</td>
            <td><button class="btn-excluir" @click="removerGasto(index)">Excluir</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>

.info {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

</style>
