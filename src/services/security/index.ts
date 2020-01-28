import log from '@/services/logging';
import store from '@/services/store';
import { User, UserManager, UserManagerSettings } from "oidc-client"

/**
 * Mandatory parameters to connect to
 * Keycloak server
 */
const options: UserManagerSettings = {
    authority: "http://localhost:8080/auth/realms/am",
    client_id: "web-app",    
    redirect_uri: "http://localhost:8081/links",
    response_type: "code"
}

/**
 * Creating an instance with provided
 * options
 */
const authClient = new UserManager(options)

/**
 * Stores credential's information received from Keycloak when
 * successful 
 * @param auth whether the user's been authenticated or not
 */

authClient.signinRedirectCallback().then((user) =>{    
    const credentials = {
        token: user.access_token
    };        

    log.debug('[AUTH] user successfully authenticated');
    store.local.set('credentials', credentials);    
});

/**
 * Finally we export it in order to use it
 * throughout the application
 */
export default authClient