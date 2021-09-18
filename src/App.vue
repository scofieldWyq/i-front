<template>
  <el-container id="app">
    <el-aside id="nav">
      <router-link to="/"><el-tag>Home</el-tag></router-link> |
      <router-link to="/about"><el-tag>About</el-tag></router-link> |
      <router-link to="/finance"><el-tag>Finance</el-tag></router-link>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
