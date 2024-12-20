<template>
    <div class="current-time divide-line">
        <div class="time-container">
            <div class="time">
                <p id="time-now">{{ hour }}<span id="colon">:</span>{{ minute }}</p>
            </div>
            <div class="date">
                <p id="date-now" >{{ currentDate }}</p>
                <p id="date-now">{{ getFormatLunarDate }}</p>
            </div>
        </div>
    </div>
</template>

<script>

const lunarMonths = [
    '正月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '冬月', '腊月'
];
const lunarDays = [
                '初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'
            ];
            
export default {
    
    data() {
        return {
            hour: "",
            minute: "",
            currentDate: "",
            lunarMonth: 0,
            lunarDate: 0
        }
    },

    mounted() {
        let updateAllDate = () => {
            let moment = this.$moment();
            this.updateDate(moment);
            this.updateLunarDate(moment);
        }

        updateAllDate();
        // 启动定时器
        this.timer = setInterval(() => {
            updateAllDate();
        }, 1000);

    },

    beforeUnmount() {
        // 在组件销毁前清除定时器
        clearInterval(this.timer);
    },

    computed: {
        getFormatLunarDate() {
            let dateOffset = 1;
            return lunarMonths[this.lunarMonth] + lunarDays[this.lunarDate - dateOffset];
        }
    },
    methods: {
        updateDate(moment) {
            this.hour = moment.format("HH");
            this.minute = moment.format("mm");
            this.currentDate = moment.format("LL dddd");
        },
        updateLunarDate(moment) {
            this.lunarMonth = moment.lunar().month();
            this.lunarDate = moment.lunar().date();
        }
    }

}

</script>

<style scoped>
.current-time {
    display: flex;
    flex-direction: column;
}


.time-container{
    text-align: left;
}

#time-now {
    margin-top: -1vh;
    margin-bottom: 0;
    margin-left: 5vw;
    font-size: 10em;
}

#time-now span#colon {
  animation: blink 1.5s step-start 0s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

#date-now {
    margin-left: 7vw;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2em;
}


</style>
