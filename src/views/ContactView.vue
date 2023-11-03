<script setup>
    import { useRoute } from "vue-router"
    import cars from "../data/cars.json"
    import HomeView from "./HomeView.vue";
    import {RouterView} from "vue-router"
    import {RouterLink} from 'vue-router'
    const route = useRoute();
    const car  =  cars.find(c => c.id === parseInt(route.params.id))
</script>
<template>
    <h2>{{ car.contact.dealer }}</h2>
    <h2>{{ car.contact.number }}</h2>
</template>