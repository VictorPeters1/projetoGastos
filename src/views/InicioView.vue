<template>
  <section class="inicio">
    <h2>Bem-vindo ao Controle de Gastos</h2>
    <p>
      Aqui você pode registrar suas receitas e gastos de forma simples e acompanhar seu desempenho financeiro.
    </p>

    <div class="botoes">
      <router-link to="/receitas" class="botao">Cadastrar Receitas</router-link>
      <router-link to="/gastos" class="botao">Cadastrar Gastos</router-link>
      <router-link to="/feedback" class="botao destaque">Ver Feedback Financeiro</router-link>
    </div>
  </section>
</template>

<style scoped>
.inicio {
  text-align: center;
  max-width: 600px;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.inicio h2 {
  color: #1e88e5;
}

.inicio p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.botoes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.botao {
  background-color: #1e88e5;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.botao:hover {
  background-color: #1565c0;
}

.destaque {
  background-color: #43a047;
}

.destaque:hover {
  background-color: #2e7d32;
}

@media (min-width: 600px) {
  .botoes {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
