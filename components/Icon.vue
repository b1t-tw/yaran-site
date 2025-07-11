<template>
  <span class="material-symbols-outlined" :class="className">
    <slot />
  </span>
</template>

<script setup>
const props = defineProps({
  className: {
    type: String,
    default: "",
  },
});
</script>