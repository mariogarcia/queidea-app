import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '@/domain/login/LoginView.vue';
import LinkListView from '@/domain/links/list/LinkListView.vue';
import MainLayout from '@/components/layout/MainLayout.vue';
import store from '@/services/store';
import keycloak from '@/services/security';
import { KeycloakError } from 'keycloak-js';
import log from '@/services/logging';

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
            component: MainLayout,
            meta: {
                requiresAuth: true,
            },
            children: [ 
                {
                    path: "",
                    name: "links:list",
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
    log.debug("[AUTH] checking requiresAuth:", to.name);
    const requiresAuth: Boolean = to.matched.some((record) => record.meta.requiresAuth)

    if (requiresAuth) {
        await keycloak
            .init({onLoad: 'login-required'})
            .success(storeCredentials)
            .error(logError);
    }

    return next();
});

const storeCredentials = (auth: boolean): void => {
    if (auth) {
        const credentials = {
            token: keycloak.token
        };        
        log.debug('[AUTH] user successfully authenticated');
        store.local.set('credentials', credentials);
    } else {
        log.debug('[AUTH] not authenticated - clearing credentials');
        store.local.clear();
    }
}

const logError = (error: KeycloakError): void => {
    log.error("[AUTH] error while authenticating: ", error);
}


export default router;