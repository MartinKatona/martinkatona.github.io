<template>
  <div class="border-gray-400 bg-slate-500 px-2 py-1 text-gray-200 text-xl">
    {{ props.title }}
  </div>
  <slot></slot>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: "" },
});
</script>
