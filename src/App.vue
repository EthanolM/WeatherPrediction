<template>
  <div>
    <WeatherDashboard></WeatherDashboard>
  </div>
</template>

<script>
import WeatherDashboard from './components/WeatherDashboard.vue';


export default {
  name: 'App',
  components: {
    WeatherDashboard
  }
}
</script>

<style>
* {
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d2c50;
  margin-top: 2em;
}

body {
  background-color: #151c29;
  background-attachment: fixed;
}

p {
    font-weight: bold;
    font-size: 1.5em;
}
</style>
