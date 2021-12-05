import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    
    {
        path: "/",
        name: "index",
        component: () => import("../components/Index"),
    },
    {
        path: "/restaurante/:id",
        name: "restaurante",
        component: () => import("../components/Restaurante"),
    },
    {
        path: "/inspector/:id",
        name: "inspector",
        component: () => import("../components/Inspector"),
    },

    ];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;