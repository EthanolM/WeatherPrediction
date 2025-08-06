<template>
    <div class="wrapper">
        <div class="upper-box">
            <CurrentTime></CurrentTime>
            <CurrentWeather :currentWeather="currentWeather" :airQuilityData="airQuilityData"></CurrentWeather>
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
import CurrentWeather from './CurrentWeather.vue';

const he_key = "请输入你的和风天气API密钥";
const city = "101180101" //城市id，这里为郑州;

export default {

    components: {
        CurrentTime,
        CurrentWeather,
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

    mounted() {
        // 启动定时器
        this.timer = setInterval(() => {
            this.getCurrentWeather();
            this.getSixDaysWeather();
            this.getAirQuility();
        }, 1000 * 3600);

    },

    beforeUnmount() {
        // 在组件销毁前清除定时器
        clearInterval(this.timer);
    },

    methods: {

        // TODO: Update weather data
        async getCurrentWeather() {
            try {
                const response = await axios.get("https://devapi.qweather.com/v7/weather/now?location=" + city + "&key=" + he_key);
                this.currentWeather = response.data.now;
                console.log("update");
            } catch (error) {
                console.log(error);
            }
        },

        async getSixDaysWeather() {
            try {
                const response = await axios.get("https://devapi.qweather.com/v7/weather/7d?location=" + city + "&key=" + he_key);
                this.sevenDaysWeather = response.data.daily;
            } catch (error) {
                console.log(error);
            }
        },

        async getAirQuility() {
            try {
                const response = await axios.get("https://devapi.qweather.com/airquality/v1/current/39.92/116.41?key=42cec5f7b91b449583bef16db13422af");
                this.airQuilityData.aqi = response.data.indexes[0].aqi;
                this.airQuilityData.category = response.data.indexes[0].category;
            } catch (error) {
                console.log(error);
            }
        },

    }
}

</script>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    /* 竖直排列 */
}

.upper-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 300px;
    align-items: start;
}

.lower-box {
    background-color: #10377f;
    background-image: linear-gradient(160deg, #10377f 0%, #164f89 100%);
    width: 97vw;
    height: 600px;
    margin: 0 auto;
    border-radius: 25px;
}

.divide-line {
    position: relative;
}

.divide-line::after {
    content: "";
    position: absolute;
    left: 100%;
    /* 让伪元素在第一列的右边 */
    top: 10px;
    /* 控制分割线的起始位置（从上往下偏移） */
    height: 250px;
    /* 设置分割线的高度 */
    width: 2px;
    /* 设置分割线的宽度 */
    background-color: rgb(255, 255, 255);
    /* 设置分割线的颜色 */
}
</style>
