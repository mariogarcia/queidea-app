import Keycloack from 'keycloak-js';

/**
 * Mandatory parameters to connect to
 * Keycloak server
 */
const keycloackOpts = {
    url: 'http://0.0.0.0:8080/auth', 
    realm: 'vue-example', 
    clientId: 'vue-test-app'
}

/**
 * Creating an instance with provided
 * options
 */
const keycloak = Keycloack(keycloackOpts)

/**
 * We need to initializate the keycloack instance
 * before start using it
 */
keycloak.init({})

/**
 * Finally we export it in order to use it
 * throughout the application
 */
export default keycloak