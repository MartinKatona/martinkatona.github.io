<template>
  <div class="px-3 py-1 columns-2">
    <div class="font-bold" v-if="props.title != ''">
      {{ props.title }}
    </div>
    <div v-if="props.description != ''">
      {{ props.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
});
</script>
