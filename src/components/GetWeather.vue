<template>
    <div class="current-weather">
        <p id="city">郑州</p>
        <p id="weather-now">{{ currentWeather.temp }}<sup><small>°C</small></sup> | {{ currentWeather.text }}</p>
        <AirQuility :airQuilityData="airQuilityData"></AirQuility>
    </div>
    <div class="current-weather"></div>
    <div v-for="(daysWeather, index) in sevenDaysWeather" :key="index" class="future-weather">
        <p class="future-weather-data">{{ daysWeather.fxDate }}</p>
        <i :class="getWeatherIcon(daysWeather.iconDay)" class="future-weather-data" id="weather-icon"></i>
        <p class="future-weather-data">{{ daysWeather.tempMin }}<sup><small>°C</small></sup> / {{ daysWeather.tempMax }}<sup><small>°C</small></sup></p>
    </div>
</template>

<script>
import axios from 'axios';
import AirQuility from './AirQuility.vue';

const he_key = "42cec5f7b91b449583bef16db13422af";
const city = "101180101";

export default {
    components: {
        AirQuility
    },

    data() {
        return {
            currentWeather: {},
            sevenDaysWeather: {},
            airQuilityData: {
                aqi: "0",
                category: "优"
            }
        }
    },

    mounted() {
        this.getCurrentWeather()
        this.getSevenDaysWeather()
        this.getAirQuility()
    },

    computed: {

    },

    methods: {
        async getCurrentWeather() {
            try {
                const response = await axios.get("https://devapi.qweather.com/v7/weather/now?location=" + city + "&key=" + he_key)
                this.currentWeather = response.data.now
            } catch (error) {
                console.log(error)
            }
        },

        async getSevenDaysWeather() {
            try {
                const response = await axios.get("https://devapi.qweather.com/v7/weather/7d?location=" + city + "&key=" + he_key)
                this.sevenDaysWeather = response.data.daily
                this.sevenDaysWeather.pop();
                console.log(this.sevenDaysWeather)
            } catch (error) {
                console.log(error)
            }
        },

        async getAirQuility() {
            try {
                const response = await axios.get("https://devapi.qweather.com/airquality/v1/current/39.92/116.41?key=42cec5f7b91b449583bef16db13422af")
                this.airQuilityData.aqi = response.data.indexes[0].aqi
                this.airQuilityData.category = response.data.indexes[0].category
            } catch (error) {
                console.log(error)
            }
        },
        
        getWeatherIcon(weatherCode) {
            return "qi-" + weatherCode;
        }
    }
};

</script>

<style>
#weather-icon {
    font-size: 70px;
}

.future-weather-data {
    line-height: 0.3;
}
</style>
