<template>
  <div :class="`px-3 py-1 ${props.classes}`">
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
  classes: { type: String, default: "" },
});
</script>
