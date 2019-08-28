<template>
     <div>
        <ul id="links">
            <li v-bind:key="link.uuid" v-for="link in links">
                {{ link.uuid }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { findAll } from './service'
import { Link, PagedResult } from '../types'

@Component
export default class View extends Vue {
    links: Array<Link> = [];

    mounted() {
        this.$subscribeTo(
            findAll(),
            (next: PagedResult<Link>) => {
                return this.links = next.nodes
            }
        )
    }
}
</script>

<style>

</style>