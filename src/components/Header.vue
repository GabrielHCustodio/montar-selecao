<template>
  <div id="nav">
    <h1 id="name">Montar seleção</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/about">Adicionar</router-link>
  </div>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>

<style scoped>
#nav {
  background-color: #f7e004;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#name {
  margin: auto;
  margin-left: 0;
  width: 300px;
  height: 40px;
  color: #586ba0;
}
#nav a {
  color: #586ba0;
  font-size: 1.1rem;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}
#nav a:hover {
  color: #fff;
}
</style>
