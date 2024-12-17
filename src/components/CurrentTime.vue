<template>
    <div class="time">
        <p>{{ currentTime }}</p>
        <p>{{ currentDate }}</p>
    </div>
</template>

<script>

//import calendar from './utils/lunar.js'

export default {
    data() {
        return {
            currentTime: this.$moment().format("H:mm"),
            currentDate: this.$moment().format("LL dddd")
        }
    },

    mounted() {
        // 在组件挂载时启动定时器
        this.timer = setInterval(() => {
            this.getTime();
            }, 1000);
    },

    beforeUnmount() {
        // 在组件销毁前清除定时器
        clearInterval(this.timer);
    },

    methods: {
        getTime() {
            let newMoment = this.$moment();
            this.currentTime = newMoment.format("H:mm");
            this.currentDate = newMoment.format("LL dddd");
        }
    }

}

</script>

<style>

</style>
