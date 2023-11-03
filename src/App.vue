<script setup>
  import {RouterView} from "vue-router"
  import HomeView from './views/HomeView.vue'
  import AboutView from './views/AboutView.vue'
  import Nav from './views/Nav.vue'


</script>
<template>
  <Nav/>
  <RouterView/>
</template>