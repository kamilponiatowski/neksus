<script setup lang="ts">
const route = useRoute()

const { data: porada } = await useAsyncData(`porada-${route.path}`, () =>
  queryCollection('porady').path(route.path).first()
)

useSeoMeta({
  title: () => porada.value?.title ? `${porada.value.title} — Neksus` : 'Porady — Neksus',
  description: () => porada.value?.description || '',
  ogTitle: () => porada.value?.title ? `${porada.value.title} — Neksus` : 'Porady — Neksus',
  ogDescription: () => porada.value?.description || '',
})
</script>

<template>
  <div v-if="porada">
    <!-- Article Header -->
    <section class="py-12 md:py-16 bg-page-alt">
      <Container>
        <div class="max-w-3xl">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-sm text-ink-muted mb-6">
            <NuxtLink to="/" class="hover:text-brand transition-colors duration-300">Start</NuxtLink>
            <Icon name="lucide:chevron-right" class="size-4" />
            <NuxtLink to="/porady" class="hover:text-brand transition-colors duration-300">Porady</NuxtLink>
            <Icon name="lucide:chevron-right" class="size-4" />
            <span class="truncate">{{ porada.title }}</span>
          </nav>

          <!-- Tags -->
          <div v-if="porada.tags && porada.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
            <Badge
              v-for="tag in porada.tags"
              :key="tag"
            >
              {{ tag }}
            </Badge>
          </div>

          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-ink" style="letter-spacing: -0.02em;">
            {{ porada.title }}
          </h1>

          <p class="text-lg text-ink-muted mb-4">
            {{ porada.description }}
          </p>

          <div class="flex items-center gap-4 text-sm text-ink-muted">
            <span class="flex items-center gap-1">
              <Icon name="lucide:user" class="size-4" />
              {{ porada.author }}
            </span>
            <span class="flex items-center gap-1">
              <Icon name="lucide:calendar" class="size-4" />
              {{ new Date(porada.date).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </span>
          </div>
        </div>
      </Container>
    </section>

    <!-- Article Content -->
    <section class="py-12">
      <Container>
        <div class="max-w-3xl mx-auto">
          <ContentRenderer :value="porada" class="prose prose-neutral dark:prose-invert max-w-none" />
        </div>
      </Container>
    </section>

    <!-- Back to list -->
    <section class="py-8 border-t border-card-border">
      <Container>
        <div class="max-w-3xl mx-auto">
          <Button to="/porady" variant="outline">
            <Icon name="lucide:arrow-left" class="size-4" />
            Wróć do listy porad
          </Button>
        </div>
      </Container>
    </section>
  </div>
</template>
