<template>
  <header class="header">
    <h1>Controle de Gastos</h1>
    <nav>
      <router-link to="/">Início</router-link>
      <router-link to="/receitas">Receitas</router-link>
      <router-link to="/gastos">Gastos</router-link>
      <router-link to="/feedback">Feedback</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #e0e0e0;
  color: #1e88e5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header h1 {
  margin: 0;
  font-size: 1.8rem;
  text-align: center;
  color: black;
}

nav {
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

nav a {
  color: #1e88e5;
  text-decoration: none;
  font-weight: bold;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover {
  background-color: rgba(30, 136, 229, 0.1);
}

nav a.router-link-exact-active {
  background-color: #1e88e5;
  color: white;
}

@media (max-width: 600px) {
  .header h1 {
    font-size: 1.4rem;
  }

  nav {
    flex-direction: column;
    align-items: center;
  }

  nav a {
    width: 100%;
    text-align: center;
  }
}
</style>
