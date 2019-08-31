import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '@/domain/login/LoginView.vue';
import LinkListView from '@/domain/links/list/LinkListView.vue';
import MainLayout from '@/components/layout/MainLayout.vue';
import store from '@/services/store';
import security from '@/services/security'
import keycloak from '@/services/security';

Vue.use(Router);

/**
 * Defining applications routes
 */
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
            meta: {
                requiresAuth: true,
            },
            children: [ 
                {
                    path: "",
                    component: LinkListView
                }
            ]
        }
    ],
});

/**
 * This interceptor helps checking whether a 
 * given path needs to be authenticated or not. 
 * If not authenticated the user will be redirected 
 * to the login view
 */
router.beforeEach(async (to, from, next) => {
    const requiresAuth: Boolean = to.matched.some((record) => record.meta.requiresAuth)

    if (requiresAuth) {
        const credentials = store.local.get('credentials')

        if (!credentials) {
            await security
                .init({onLoad: 'login-required'})
                .success((auth) => {
                    if (!auth) {
                        // eslint-disable-next-line no-console
                        console.log('success pero no autenticado');
                    } else {
                        // eslint-disable-next-line no-console
                        console.log('success!!');
                    }
                }).error((error) => {
                    // eslint-disable-next-line no-console
                    console.log('error en la autenticacion');
                });
        }
    }
    // eslint-disable-next-line no-console
    console.log('keycloack', keycloak);
    return next();
});

export default router;