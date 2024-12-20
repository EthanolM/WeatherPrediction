<template>
    <div class="current-temp divide-line">
        <!--TODO: move to an individual file-->
        <p>郑州 | {{ currentWeather.text }}</p>
        <i :class="'qi-' + currentWeather.icon" id="now-weather-icon"></i>
        <p id="weather-now">{{ currentWeather.temp }}<sup><small>°C</small></sup></p>
    </div>

    <div class="current-weather-detail">
        <p>{{ currentWeather.windDir }}{{ currentWeather.windScale }}级</p>
        <p>相对湿度 {{ currentWeather.humidity }}</p>
        <p>空气质量 {{ airQuilityData.aqi }} {{ airQuilityData.category }}</p>
    </div>
</template>

<script>
export default {
    props: {
        currentWeather: {
            type: Object,
            required: true
        },
        airQuilityData: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>

.current-weather-detail {
    display: flex;              /* 启用 Flexbox */
    flex-direction: column;     /* 使子元素垂直排列 */
    text-align: left;
    margin-left: auto;
    margin-right: auto;
}

#now-weather-icon {
    font-size: 4em;
}

p {
    font-size: 2.5em;
    margin: 18px;
}
</style>
