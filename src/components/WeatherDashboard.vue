<template>
    <div class="wrapper">
        <div class="upper-box">
            <CurrentTime></CurrentTime>

            <div class="current-weather">
                <p>郑州 | {{ currentWeather.text }}</p>
                <i :class="'qi-' + currentWeather.icon" id="now-weather-icon"></i>
                <p id="weather-now">{{ currentWeather.temp }}<sup><small>°C</small></sup></p>
            </div>

            <div class="current-weather-detail">
                <p>{{ currentWeather.windDir }}{{ currentWeather.windScale }}级</p>
                <p>相对湿度 {{ currentWeather.humidity }}</p>
                <p>空气质量 {{ airQuilityData.aqi }} {{ airQuilityData.category }}</p>
            </div>
        </div>

        <div class="lower-box">
            <FutureWeather :sevenDaysWeather="sevenDaysWeather"></FutureWeather>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CurrentTime from './CurrentTime.vue';
import FutureWeather from './FutureWeather.vue';

const he_key = "42cec5f7b91b449583bef16db13422af";
const city = "101180101";

export default {

    components: {
        CurrentTime,
        FutureWeather,
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

    created() {
        this.getCurrentWeather()
        this.getSixDaysWeather()
        this.getAirQuility()
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

        async getSixDaysWeather() {
            try {
                const response = await axios.get("https://devapi.qweather.com/v7/weather/7d?location=" + city + "&key=" + he_key)
                this.sevenDaysWeather = response.data.daily
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
        }
    }
}

</script>

<style>
.wrapper {
    display: flex;
    flex-direction: column; /* 竖直排列 */
    gap: 3vh; /* 控制子元素之间的间距 */
}

.upper-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
}

.lower-box {
    background-color: #4cade0;
    background-image: linear-gradient(150deg, #4cade0 0%, #105ea6 67%);
    width: 97vw;
    margin: 0 auto;
    border-radius: 25px; 
}

#city {
    float: left;
    font-size: 30px;
}


.current-time {
    position: relative;
}

.current-time::after {
      content: "";
      position: absolute;
      left: 100%; /* 让伪元素在第一列的右边 */
      top: 10px; /* 控制分割线的起始位置（从上往下偏移） */
      height: 70%; /* 设置分割线的高度 */
      width: 2px; /* 设置分割线的宽度 */
      background-color: rgb(255, 255, 255); /* 设置分割线的颜色 */
}

.current-weather {
    position: relative;
}

.current-weather::after {
      content: "";
      position: absolute;
      left: 100%; /* 让伪元素在第一列的右边 */
      top: 10px; /* 控制分割线的起始位置（从上往下偏移） */
      height: 70%; /* 设置分割线的高度 */
      width: 2px; /* 设置分割线的宽度 */
      background-color: rgb(255, 255, 255); /* 设置分割线的颜色 */
}

.current-weather-detail {
    display: flex;              /* 启用 Flexbox */
    flex-direction: column;     /* 使子元素垂直排列 */
    align-items: center;        /* 使容器水平居中 */
    /* TODO: 文字向左对齐*/
}

.future-weather {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
}

#now-weather-icon {
    font-size: 4em;
}

</style>
