<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string
  href?: string
  target?: string
  variant?: 'primary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  block?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
})

const is = computed(() =>
  props.to ? resolveComponent('NuxtLink') : props.href ? 'a' : 'button',
)
</script>

<template>
  <component
    :is="is"
    :to="to"
    :href="href"
    :target="target"
    class="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-in-out cursor-pointer"
    :class="[
      variant === 'link'
        ? 'text-brand hover:text-brand-hover underline-offset-4 hover:underline'
        : [
            'focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2',
            size === 'sm' && 'px-4 py-1.5 text-sm rounded-lg',
            size === 'md' && 'px-5 py-2 text-sm rounded-lg',
            size === 'lg' && 'px-6 py-2.5 text-base rounded-full',
            size === 'xl' && 'px-8 py-3.5 text-base rounded-full',
            variant === 'primary' && 'bg-brand text-white hover:bg-brand-hover shadow-glow hover:shadow-glow',
            variant === 'outline' && 'border border-ink/20 text-ink hover:border-brand hover:text-brand dark:border-ink-muted/30 dark:text-ink dark:hover:border-brand dark:hover:text-brand-light',
            variant === 'ghost' && 'text-brand hover:bg-brand/10 rounded-lg',
          ],
      block && 'w-full',
    ]"
  >
    <slot />
  </component>
</template>
