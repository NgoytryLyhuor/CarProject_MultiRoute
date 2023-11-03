import { createRouter,createWebHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";
import AboutViewVue from "../views/AboutView.vue";
import CarView from "../views/CarView.vue"
import ContactView from "../views/ContactView.vue"
import NotFound from "../views/404View.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"home",
            component: HomeViewVue
        },
        {
            path:"/home",
            redirect:"/"
        },
        {
            path:"/about",
            name:'about',
            component: AboutViewVue
        },
        {
            path:"/cars/:id",
            name:"car",
            component: CarView,
            children:[
                {
                    path:"contact",
                    component: ContactView
                }
            ]
        },
        {
            path:"/:catchall(.*)*",
            name: "Not Found",
            component: NotFound
        }
    ]
})

export default router