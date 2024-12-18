<template>
  <div class="wrapper">
    <CurrentDate></CurrentDate>
    <GetWeather></GetWeather>
  </div>
</template>

<script>
import CurrentDate from './components/CurrentTime.vue'
import GetWeather from './components/GetWeather.vue';

export default {
  name: 'App',
  components: {
    CurrentDate,
    GetWeather
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
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #4cade0;
  background-image: linear-gradient(150deg, #4cade0 0%, #105ea6 67%);
  background-attachment: fixed;
}

.wrapper {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: 40%, 30%, 30%;
}

.current-weather {
  border: 1px solid #e5e4e9;
}

.current-time {
  border: 1px solid #e5e4e9;
}

p {
    font-weight: bold;
    font-size: 25px;
}
</style>
