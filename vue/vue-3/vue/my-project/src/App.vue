<template>
    <div id="app">
      <a href="#/work">工作</a>
      <a href="#/study">学习</a>

      <router-link to="/" exact>stark</router-link>
      <router-link to="/work" tag="li">工作</router-link>
      <router-link to="/article/1" tag="li">文章 </router-link>
      <router-link active-class="shudong" to="/study">学习</router-link>
      <router-view/>
    </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color:yellow;
}
.shudong{
  color:red;
}
</style>