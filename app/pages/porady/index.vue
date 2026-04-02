<script setup lang="ts">
useSeoMeta({
  title: 'Porady komputerowe — Neksus',
  description: 'Praktyczne porady dotyczące serwisu, modernizacji i używania komputerów. Blog serwisu komputerowego Neksus z Gdańska.',
  ogTitle: 'Porady komputerowe — Neksus',
  ogDescription: 'Praktyczne porady dotyczące serwisu, modernizacji i używania komputerów. Blog serwisu komputerowego Neksus z Gdańska.',
})

const { data: porady } = await useAsyncData('porady', () =>
  queryCollection('porady')
    .select('path', 'title', 'description', 'image', 'tags', 'date')
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-12 md:py-16 bg-page-alt">
      <Container>
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center justify-center size-14 rounded-full icon-glass">
              <Icon name="lucide:lightbulb" class="size-7" />
            </div>
            <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink" style="letter-spacing: -0.02em;">
              Porady
            </h1>
          </div>
          <p class="text-lg text-ink-muted">
            Praktyczne wskazówki dotyczące serwisu i używania komputerów
          </p>
        </div>
      </Container>
    </section>

    <!-- Articles List -->
    <section class="py-12">
      <Container>
        <div v-if="porady && porady.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <Card
            v-for="porada in porady"
            :key="porada.path"
          >
            <template v-if="porada.image" #image>
              <NuxtImg
                :src="porada.image"
                :alt="porada.title"
                class="w-full h-40 object-cover"
                width="400"
                height="160"
                loading="lazy"
              />
            </template>
            <template #header>
              <div v-if="porada.tags && porada.tags.length > 0" class="flex flex-wrap gap-2 mb-2">
                <Badge
                  v-for="tag in porada.tags.slice(0, 3)"
                  :key="tag"
                  size="sm"
                >
                  {{ tag }}
                </Badge>
              </div>
              <NuxtLink :to="porada.path" class="group">
                <h2 class="text-lg font-semibold group-hover:text-brand transition-colors duration-300 text-ink">
                  {{ porada.title }}
                </h2>
              </NuxtLink>
            </template>
            <p class="text-sm text-ink-muted">{{ porada.description }}</p>
            <template #footer>
              <div class="flex items-center justify-between">
                <span class="text-xs text-ink-muted">
                  {{ new Date(porada.date).toLocaleDateString('pl-PL') }}
                </span>
                <Button :to="porada.path" variant="link" size="sm">
                  Czytaj więcej
                  <Icon name="lucide:arrow-right" class="size-4" />
                </Button>
              </div>
            </template>
          </Card>
        </div>

        <div v-else class="text-center py-12">
          <Icon name="lucide:file-text" class="size-16 text-ink-muted mx-auto mb-4" />
          <p class="text-ink-muted text-lg">Brak porad do wyświetlenia</p>
          <p class="text-sm text-ink-muted mt-2">Wkrótce pojawią się nowe artykuły</p>
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <section class="py-12 bg-page-alt">
      <Container>
        <div class="text-center max-w-xl mx-auto">
          <h2 class="text-2xl font-bold mb-4 text-ink">Potrzebujesz pomocy?</h2>
          <p class="text-ink-muted mb-6">
            Jeśli masz problem z komputerem, który wykracza poza nasze porady, skontaktuj się z nami.
          </p>
          <Button to="/kontakt" size="lg">
            Skontaktuj się
          </Button>
        </div>
      </Container>
    </section>
  </div>
</template>
