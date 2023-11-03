<script setup>
    import {useRoute,RouterView,useRouter} from "vue-router"
    import cars from "../data/cars.json"
    import HomeView from "./HomeView.vue";
    const route = useRoute();
    const router = useRouter();

    const carID = parseInt(route.params.id);
    const car  =  cars.find(c => c.id === carID)
    const showContact = () => {
        if(carID === 4) return ;
        return router.push(`/cars/${carID}/contact`)
    }
</script>
<template>
    <div class="container">
        <div class="card" v-if="car">
            <div class="details">
                <h3 class="name">{{ car.name }}</h3>
                <h3 class="me">Price : {{ car.price }}$</h3>
                <h3 class="me">Year : {{ car.year }}</h3>
                <button class="button" @click="router.push(`/cars/${carID}/contact`)">Click for contact</button>
                <div style="text-align: center;width: 135%;">
                    <RouterView/>    
                </div>
            </div>
            <div class="img">
                <img :src="car.img" alt="">
            </div>
        </div>
        <div v-else>
            <h1 style="color: white;font-weight: 800;">Car Not Found</h1>    
        </div>
    </div>
</template>
<style scoped>
    .container{
        width: 100vw;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
    }
    .card{
        width: 900px;
        height: 400px;
        background-color: white;
        border-radius: 20px;
    }
    .details{
        width: 30%;
        height: 100%;
        float: left;
    }
    .button{
        width: 200px;
        height: 50px;
        border-radius: 20px;
        background-color: cornflowerblue;
        border: none;
        font-size: 25px;
        font-weight: 500;
        margin-left: 30%;
        margin-top: 50px;
    }
    .name{
        width: 117%;
        background-color: rgb(176, 176, 176) ;
        padding: 20px;
        font-size: 30px;
        font-weight: 700;
        border-radius: 20px;
        margin-left: 13px;
        margin-top: 20px;
        text-align: center;
    }
    .img{
        float: right;
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        width: 100%;
        height: 400px;
        border-radius: 20px;
        object-fit: cover;
    }
    .me{
        font-size: 25px;
        margin-left: 80px;
        margin-top: 20px;
        text-align: center;
    }
</style>