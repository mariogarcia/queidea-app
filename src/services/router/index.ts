import log from '@/services/logging';
import authService from '@/services/security';
import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '@/domain/login/LoginView.vue';
import LinkListView from '@/domain/links/list/LinkListView.vue';
import MainLayout from '@/components/layout/MainLayout.vue';

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
        const user = await authService.getUser()
        
        if (user == null){
            await authService.signinRedirect().catch(logError);
        }   
    }

    return next();
});

/**
 * Logs error produces in a failing attempt of authentication
 * 
 * @param error error received from failure authentication
 */
const logError = (error: any): void => {
    log.error("[AUTH] error while authenticating: ", error);
}


export default router;