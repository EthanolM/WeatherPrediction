<template>
    <div class="future-weather">
        <div v-for="(daysWeather, index) in sevenDaysWeather" :key="index" class="sevenDays-weather">
            <p>{{ this.getDay(daysWeather.fxDate) }}</p> <!--TODO days-->
            <p class="weather-data">{{ this.$moment(daysWeather.fxDate, "YYYY-MM-DD").format("MM-DD") }}</p>
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
        },

        getDay(dateString) {
            return this.$moment(dateString, "YYYY-MM-DD").isSame(this.$moment(), "day") 
            ? "今天" 
            : this.$moment(dateString, "YYYY-MM-DD").format("dddd");
        }
    }
};

</script>

<style scoped>
.future-weather {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 1vh;
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

.sevenDays-weather {
    position: relative; /* 添加相对定位 */
}

.sevenDays-weather::after {
    content: "";
    position: absolute;
    left: 100%; /* 让伪元素在第一列的右边 */
    top: 0px; /* 控制分割线的起始位置（从上往下偏移） */
    height: 600px; /* 设置分割线的高度 */
    width: 2px; /* 设置分割线的宽度 */
    background-color: rgb(255, 255, 255); /* 设置分割线的颜色 */
    opacity: 0.3;
}

.sevenDays-weather:nth-child(7)::after {
  display: none;
}
</style>
