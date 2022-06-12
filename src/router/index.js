import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import Cari from '../views/cari-reviewer/cari-reviewer.vue'
import Payment from '../views/payment/payment.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/log-sign-in',
        name: 'masuk',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/log-sign-in/log-sign-in.vue')
    },
    {
        path: '/cari-reviewer/:packet&:type',
        name: 'cari',
        component: Cari,
        props: true
    },
    {
        path: '/payment/:packet&:type;:id',
        name: 'payment',
        component: Payment,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
})

export default router