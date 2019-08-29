import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '@/login/LoginView.vue';
import LinkListView from '@/links/list/LinkListView.vue';
import MainLayout from '@/components/layout/MainLayout.vue';

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: '/',
    routes: [
        {
            path: "/",
            name: "home",
            redirect: { name: "links:list" }
        },
        {
            path: "/login",
            name: "login",
            component: LoginView
        },
        {
            path: "/links",
            name: "links:list",
            component: MainLayout,
            children: [ 
                {
                    path: "",
                    component: LinkListView
                }
            ]
        }
    ],
});

export default router;