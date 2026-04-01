<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'info' | 'warning' | 'error' | 'success'
  title?: string
  description?: string
}>(), {
  color: 'info',
})
</script>

<template>
  <div
    class="rounded-lg border p-4 flex gap-3"
    :class="[
      color === 'info' && 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-200',
      color === 'warning' && 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-200',
      color === 'error' && 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-800 dark:text-red-200',
      color === 'success' && 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-200',
    ]"
  >
    <div v-if="$slots.icon" class="flex-shrink-0 mt-0.5">
      <slot name="icon" />
    </div>
    <div class="min-w-0">
      <p v-if="title || $slots.title" class="font-semibold text-sm">
        <slot name="title">{{ title }}</slot>
      </p>
      <div v-if="description || $slots.description" class="text-sm mt-1 opacity-90">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>
