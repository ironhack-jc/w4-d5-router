<template>
  <!-- <header>
    <a href="/">Home</a>
    <a href="/projects">Projects</a>
  </header> -->

  <header>
    <RouterLink to="/">
      <img src="./assets/logo.svg" width="16" />
    </RouterLink>

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/user/profile">Profile</RouterLink>
    <RouterLink to="/user/stars">Stars</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
    <RouterLink to="aboutme">About me</RouterLink>
  </header>

  <div id="vista-principal" class="w-80 bg-red">
    <RouterView />
  </div>

  <footer>
    Pie de página
  </footer>
</template>

<script>
export default {

}
</script>


<style scoped>
a {
  padding: 0 10px;
}
</style>