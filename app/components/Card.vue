<template>
  <div class="group rounded-2xl border border-card-border bg-card hover:-translate-y-1 hover:shadow-xl hover:border-brand transition-all duration-200 ease-in-out overflow-hidden">
    <div v-if="$slots.header" class="px-5 py-4 border-b border-card-border">
      <slot name="header" />
    </div>
    <div class="px-5 py-4">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-5 py-4 border-t border-card-border">
      <slot name="footer" />
    </div>
  </div>
</template>
