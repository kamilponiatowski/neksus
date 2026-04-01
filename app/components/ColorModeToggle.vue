<script setup lang="ts">
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="p-2 rounded-lg text-ink-muted hover:text-brand hover:bg-brand/5 transition-all duration-300 cursor-pointer"
    aria-label="Zmień motyw kolorystyczny"
    @click="toggle"
  >
    <Icon v-if="colorMode.value === 'dark'" name="lucide:sun" class="size-5" />
    <Icon v-else name="lucide:moon" class="size-5" />
  </button>
</template>
