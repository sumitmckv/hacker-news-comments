<template>
  <div v-if="loading && !doNotLoad">
    <div class="relative flex justify-center items-center h-screen">
      <div
        class="inline-block animate-ping ease duration-300 w-2 h-2 rounded-full bg-blue-600 mx-2"
      ></div>
      <div
        class="inline-block animate-ping ease duration-300 s-1_5 rounded-full bg-blue-500 mx-2"
      ></div>
      <div
        class="inline-block animate-ping ease duration-300 w-1 h-1 rounded-full bg-blue-400 mx-2"
      ></div>
      <div
        class="inline-block animate-ping ease duration-300 s-0_5 rounded-full bg-blue-300 mx-2"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';
const loader = namespace('loader');

@Component
export default class Loader extends Vue {
  @loader.State
  private loading!: boolean;

  @loader.State
  private doNotLoad!: boolean;
}
</script>
<style scoped>
.s-1_5 {
  height: 0.33rem;
  width: 0.33rem;
}
.s-0_5 {
  height: 0.13rem;
  width: 0.13rem;
}
</style>
