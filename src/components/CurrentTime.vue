<template>
    <div class="current-time">
        <div class="day-time">
            <p id="day-now">{{ currentDay }}</p>
            <p id="time-now">{{ currentTime }}</p>
        </div>
        <div class="date">
            <p id="date date-now" >{{ currentDate }}</p>
            <p id="date lunar-date-now">{{ getFormatLunarDate }}</p>
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
            currentTime: "",
            currentDate: "",
            currentDay: "",
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
            this.currentTime = moment.format("H:mm:ss");
            this.currentDate = moment.format("LL");
            this.currentDay = moment.format("dddd");
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
    line-height: 0.3;
}

p {

}

#day-now {
    font-size: 2.5em;
}
#time-now {
    font-size: 3em;
}

.date {
}
</style>
