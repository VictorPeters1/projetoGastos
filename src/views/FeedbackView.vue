<template>
  <section>
    <h2>Seu Feedback Financeiro</h2>

    <div class="resumo">
      <p><strong>Total de receitas:</strong> R$ {{ totalReceitas.toFixed(2) }}</p>
      <p><strong>Total de gastos:</strong> R$ {{ totalGastos.toFixed(2) }}</p>
    </div>

    <div class="mensagem" v-if="mensagem">
      <p>{{ mensagem }}</p>
      <p v-if="dica" class="dica">{{ dica }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useReceitasStore } from '@/stores/receitas'
import { useGastosStore } from '@/stores/gastos'

const receitasStore = useReceitasStore()
const gastosStore = useGastosStore()

const totalReceitas = computed(() => receitasStore.totalReceitas)
const totalGastos = computed(() => gastosStore.totalGastos)

const mensagem = computed(() => {
  if (totalReceitas.value > totalGastos.value) {
    return 'Parabéns! Você está gastando menos do que ganha.'
  } else if (totalReceitas.value === totalGastos.value) {
    return 'Atenção: sua receita está no limite com seus gastos.'
  } else {
    return 'Alerta! Você está gastando mais do que ganha.'
  }
})

const dica = computed(() => {
  const sup = gastosStore.listaGastos.filter(g => g.tipo === 'superfluo')
  const totalSup = sup.reduce((acc, g) => acc + Number(g.valor), 0)
  const percSup = totalGastos.value > 0 ? (totalSup / totalGastos.value) * 100 : 0

  if (percSup > 30) {
    return `Seus gastos supérfluos representam ${percSup.toFixed(1)}% do total. Considere economizar mais.`
  }

  const inesperados = gastosStore.listaGastos.filter(g => g.tipo === 'inesperado')
  if (inesperados.length > 2) {
    return 'Você teve muitos gastos inesperados. Que tal reservar uma quantia mensal para emergências?'
  }

  return null
})
</script>

<style scoped>
.resumo {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.mensagem {
  background-color: #e3f2fd;
  padding: 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.mensagem.dica {
  margin-top: 1rem;
  font-style: italic;
  color: #0d47a1;
}
</style>
