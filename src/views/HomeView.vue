<script setup>
    import cars from '../data/cars.json'
    import {RouterLink} from 'vue-router'
</script>
<template>
    <div>
        <div class="cars">
            <RouterLink v-for="car in cars" :to="`/cars/${car.id}`" :key="car.id">
                {{ car.name }}
            </RouterLink>
        </div>
    </div>
</template>
<style scoped>
    .cars{
        display: flex;
    }
    .cars a{
        text-decoration: none;
        color: white;
        width: 100%;
        box-shadow: 1px 1px 10px #ffffff;
        margin: 10px;
        padding: 10px 20px;
        font-size: 16px;
    }
</style>