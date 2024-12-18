<template>
    <div>
        <p> {{ airQuilityData }} </p>
    </div>
</template>

<script>
export default {
    name: 'AirQuility',
    props: {
        airQuilityData: {
            aqi: String,
            category: String
        }
    }

}

</script>

<style>

</style>
