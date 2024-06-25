import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/index.vue'),
        redirect: '/home',
        meta: {
            title: 'Home',
        },

        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/Home/index.vue'),
                meta: {
                    title: 'اسم الشركة',
                },
            },
            {
                path: '/services',
                name: 'Our Services',
                component: () => import('../views/Services/index.vue'),
                meta: {
                    title: 'اسم الشركة',
                },
            },
        ],
    },

]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes,
})

export default router