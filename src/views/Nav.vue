<script setup>
    import {RouterLink} from "vue-router"
</script>
<template>
    <div class="container12">
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
</template>
<style scoped>
    .container12 a{
        margin-top: 20px;
        text-decoration: none;
        font-size: 20px;
        margin: 20px 20px;
        color: white;
    }
    .active{
        color: yellow !important;
        font-weight: bold;
    }
</style>