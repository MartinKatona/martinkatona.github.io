<template>
  <main
    class="grid grid-flow-col grid-cols-3 md:grid-cols-5 p-5 gap-5 mx-auto h-screen"
  >
    <GeneralInfo class="shadow-md shadow-slate-500" />
    <RightSide class="shadow-md shadow-slate-500 col-span-2 md:col-span-4" />
  </main>
  <FFooter />
</template>

<script setup lang="ts">
import GeneralInfo from "./components/left-side/GeneralInfo.vue";
import RightSide from "./components/right-side/RightSide.vue";
import FFooter from "./components/FFooter.vue";
</script>
