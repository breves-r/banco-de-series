import { createRouter, createWebHashHistory } from "vue-router";
import ListeSeries from '../views/ListSeries.vue'
import CreateSeries from '../views/CreateSeries.vue'

const routes = [
    {
        path: '/',
        name: 'List',
        component: ListeSeries
    },
    {
        path: '/create',
        name: 'Create',
        component: CreateSeries
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router