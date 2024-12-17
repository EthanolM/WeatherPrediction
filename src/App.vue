<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <CurrentDate></CurrentDate>
  </div>
</template>

<script>
import CurrentDate from './components/CurrentDate.vue'

export default {
  name: 'App',
  components: {
    CurrentDate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
