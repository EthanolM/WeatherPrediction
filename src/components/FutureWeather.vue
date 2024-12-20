<template>
    <div class="future-weather">
        <div v-for="(daysWeather, index) in sevenDaysWeather" :key="index" class="sevenDays-weather">
            <p>今天</p> <!--TODO days-->
            <p class="weather-data">{{ daysWeather.fxDate }}</p>
            <i :class="getWeatherIcon(daysWeather.iconDay)" class="weather-data" id="weather-icon"></i>
            <!--<p class="sevenDays-weather-data">{{ daysWeather.tempMax }}<sup><small>°C</small></sup></p>-->
        </div>
        <DrawTemp :sevenDaysWeather="sevenDaysWeather"></DrawTemp>
        <div v-for="(nightsWeather, index) in sevenDaysWeather" :key="index" class="sevenNights-weather">
            <i :class="getWeatherIcon(nightsWeather.iconNight)" class="weather-data" id="weather-icon"></i>
            <!--<p class="sevenNights-weather-data">{{ nightsWeather.tempMin }}<sup><small>°C</small></sup></p>-->
            <p class="weather-data">{{ nightsWeather.windDirDay }}</p>
            <p class="weather-data">{{ nightsWeather.windScaleDay }}级</p>
        </div>
    </div>
</template>

<script>
import DrawTemp from './DrawTemp.vue';

export default {
    components: {
        DrawTemp
    },

    props: {
        sevenDaysWeather: {
            type: Object,
            required: true
        }
    },

    computed: {

    },

    methods: {
        getWeatherIcon(weatherCode) {
            return "qi-" + weatherCode;
        }
    }
};

</script>

<style scoped>
.future-weather {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr 2fr 1fr;
    grid-row-gap: 2vh;
    border: 1px solid #000;
}

.draw-temp {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 3;
}


#weather-icon {
    font-size: 60px;
}

.weather-data {
    line-height: 0.7;
}
</style>
