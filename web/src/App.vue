<template>
  <div id="app">
    <app-header />
    <loader />
    <router-view />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import AppHeader from '@/components/AppHeader.vue';
import Loader from '@/components/Loader.vue';

@Component({
  components: {AppHeader, Loader}
})
export default class App extends Vue {}
</script>

<style src="./assets/app.css"></style>
