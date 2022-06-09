<template>
  <div class="flex">
    <img class="h-28" :src="require('@/assets/' + props.image)" alt="Picture" />
    <div class="p-2 w-full flex flex-col justify-center items-center">
      <div
        class="text-2xl text-center overflow-hidden text-slate-900 font-semibold dark:text-slate-300"
      >
        <span> {{ props.name }} </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: { type: String, default: "" },
  name: { type: String, default: "name" },
});
</script>
