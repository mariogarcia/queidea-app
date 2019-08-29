<template>
    <div class="login">
        <img class="logo" alt="Vue logo" src="../../assets/idea.png">        
        <form>
            <label for="username">Username</label>
            <input type="text" name="username" />

            <label for="password">Password</label>
            <input type="password" name="password" />

            <button type="submit" value="Login">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginView extends Vue {

}
</script>>
<style scoped>
    * {
        --border-gray: #666666;
        --border-black: black;
        --background-yellow: #f6b64f;
    }

    .login {
        height: 100vh;
    }

    img {
        display: block;
        margin: auto;
    }
    
    form {        
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 30em;
    }
    label {
        display: flex;
        justify-content: flex-start;
        margin: .5em 0;
    }
    input {
        border: 1px solid var(--border-gray);
        font-size: 1em;          
        height: 2em;
        padding: .2em .5em;
    }
    button {
        background: var(--background-yellow);
        border: 1px solid var(--border-black);        
        color: white;
        font-weight: bold;
        height: 3em;
        margin: 1em 0 .1em 0;
        transition: 0.3s;
    }
</style>>