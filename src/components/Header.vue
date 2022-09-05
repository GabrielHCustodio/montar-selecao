<template>
  <div id="nav">
    <router-link to="/" id="name_site">
      <h1 id="name">Montar seleção</h1>
    </router-link>
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
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
#nav #name_site {
  margin: auto;
  margin-left: 0;
}
#name {
  width: 300px;
  height: 40px;
}
#nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}
#nav a:hover {
  color: #fff;
}
</style>
