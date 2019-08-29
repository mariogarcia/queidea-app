<template>
    <div class="result">
        <table>
            <thead>
                <th>uuid</th>
                <th>description</th>
                <th>uri</th>                     
            </thead>
            <tbody>
                <tr v-bind:key="link.uuid" v-for="link in links">
                    <td>{{ link.uuid }}</td>
                    <td>{{ link.description }}</td>
                    <td>{{ link.uri }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { findAll } from './service'
import { Link, PagedResult } from '../types'

@Component
export default class LinkListView extends Vue {
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

<style scoped>
    * {
        --table-border-color: #cccccc;
        --row-background-color: #ebebeb;
        --row-hover-background: #ef9b13;
        --row-hover-color: black;
    }
    table {
        border: 1px solid var(--table-border-color);
        margin: auto;
    }

    th {
        border-right: 1px solid var(--table-border-color);
        border-bottom: 1px solid var(--table-border-color);
        height: 2em;
        margin: 0;       
        padding: 0 2em;
        text-transform: uppercase; 
    }

    tr {
        background-color: var(--row-background-color);
    }

    tr:hover {
        background-color: var(--row-hover-background);
        color: var(--row-hover-color);
        cursor: pointer;
        font-weight: 400;
    }

    th:last-child {
        border-right: 0;
        border-bottom: 1px solid var(--table-border-color);
        margin: 0;        
    }

    td {
        padding: .5em;
    }
</style>