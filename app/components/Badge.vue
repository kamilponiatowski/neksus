<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'brand' | 'success' | 'error' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
}>(), {
  color: 'brand',
  size: 'md',
  dot: false,
})
</script>

<template>
  <span
    class="inline-flex items-center font-medium rounded-full transition-colors duration-300"
    :class="[
      size === 'sm' && 'px-2 py-0.5 text-xs',
      size === 'md' && 'px-2.5 py-1 text-xs',
      size === 'lg' && 'px-3.5 py-1.5 text-sm',
      color === 'brand' && 'bg-brand/10 text-brand dark:bg-brand-light/10 dark:text-brand-light',
      color === 'success' && 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
      color === 'error' && 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      color === 'warning' && 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
      color === 'info' && 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    ]"
  >
    <span
      v-if="dot"
      class="size-2 rounded-full mr-2 flex-shrink-0"
      :class="[
        color === 'success' && 'bg-emerald-500 pulse-dot',
        color === 'error' && 'bg-red-500',
        color === 'brand' && 'bg-brand pulse-dot',
        color === 'warning' && 'bg-amber-500',
        color === 'info' && 'bg-blue-500',
      ]"
    />
    <slot />
  </span>
</template>
