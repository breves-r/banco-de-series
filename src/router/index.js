import { createRouter, createWebHashHistory } from "vue-router";
import ListeSeries from '../views/ListSeries.vue'
import CreateeSeries from '../views/CreateSeries.vue'

const routes = [
    {
        path: '/',
        name: 'List',
        component: ListeSeries
    },
    {
        path: '/create',
        name: 'Create',
        component: CreateeSeries
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router