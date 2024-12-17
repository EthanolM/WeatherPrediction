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
            currentTime: this.$moment().format("H:mm:ss"),
            currentDate: this.$moment().format("HH/dddd")
        }
    },

    mounted() {
        // 在组件挂载时启动定时器
        this.timer = setInterval(this.getTime, 1000);
    },

    beforeUnmount() {
        // 在组件销毁前清除定时器
        clearInterval(this.timer);
    },

    methods: {
        getTime() {
            this.currentTime = this.$moment().format("H:mm:ss");
        },
        getDate() {
            this.currentDate = this.$moment().format("HH/dddd");
        }
    }

}

</script>

<style>

</style>
