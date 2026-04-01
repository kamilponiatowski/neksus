<script setup lang="ts">
const business = useBusinessData()
const { isOpen, statusText, statusColor } = useOpenStatus()

// Schema.org structured data
useNeksusSchema()

// SEO meta for homepage
useSeoMeta({
  title: 'Neksus — Serwis i Sklep Komputerowy Gdańsk',
  description: business.description,
  ogTitle: 'Neksus — Serwis i Sklep Komputerowy Gdańsk',
  ogDescription: business.description,
})

// Animated founding-year counter
const displayYear = ref(0)
onMounted(() => {
  const target = business.foundedYear
  const durationMs = 1400
  const fps = 60
  const frames = Math.round(durationMs / (1000 / fps))
  const increment = target / frames
  let frame = 0
  const tick = () => {
    frame++
    displayYear.value = Math.min(Math.round(frame * increment), target)
    if (displayYear.value < target) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
})

// Trust-bar brands with brand colors
const trustBrands = [
  { name: 'Intel',   color: '#0071C5' },
  { name: 'AMD',     color: '#ED1C24' },
  { name: 'ASUS',    color: '#00539B' },
  { name: 'Lenovo',  color: '#E2231A' },
  { name: 'HP',      color: '#0096D6' },
  { name: 'Dell',    color: '#007DB8' },
  { name: 'Toshiba', color: '#CC0000' },
  { name: 'Samsung', color: '#1428A0' },
]
// Duplicate for seamless marquee loop
const marqueeItems = [...trustBrands, ...trustBrands]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-32 hero-mesh">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-flex items-center gap-3 mb-6">
            <Badge :color="statusColor" size="lg" dot>
              {{ statusText }}
            </Badge>
            <a
              :href="business.social.googleMaps"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-hover transition-colors duration-300"
            >
              <Icon name="lucide:navigation" class="size-4" />
              Przyjedź do nas
            </a>
          </div>

          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-ink" style="letter-spacing: -0.02em;">
            Fachowy serwis <span class="text-brand">komputerowy</span><br class="hidden md:block">
            w Gdańsku
          </h1>

          <p class="text-lg md:text-xl text-ink-muted max-w-2xl mx-auto mb-10">
            Od {{ business.foundedYear }} roku oferujemy markowe podzespoły, profesjonalne naprawy
            i rzetelne doradztwo. Nie przepłacisz.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/kontakt" size="xl" class="pulse-brand">
              <Icon name="lucide:phone" class="size-5" />
              Skontaktuj się
            </Button>
            <Button to="/serwis" size="xl" variant="outline">
              <Icon name="lucide:wrench" class="size-5" />
              Usługi serwisowe
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Brand Logos Bar — scrolling marquee -->
    <section class="py-8 border-y border-nav-border bg-page-alt overflow-hidden">
      <Container>
        <p class="text-center text-xs text-ink-muted uppercase tracking-widest mb-5 font-medium">Zaufane marki w naszej ofercie</p>
      </Container>
      <div class="overflow-hidden">
        <div class="trust-track flex items-center w-max">
          <span
            v-for="(brand, i) in marqueeItems"
            :key="i"
            class="px-8 text-sm font-bold text-ink-muted tracking-widest cursor-default select-none transition-colors duration-300"
            @mouseenter="($event.target as HTMLElement).style.color = brand.color"
            @mouseleave="($event.target as HTMLElement).style.color = ''"
          >{{ brand.name }}</span>
        </div>
      </div>
    </section>

    <!-- Bento Grid — Services -->
    <section class="py-16">
      <Container>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold tracking-tight mb-3 text-ink">Czym się zajmujemy</h2>
          <p class="text-ink-muted text-lg">Kompleksowa obsługa IT dla klientów indywidualnych i firm</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card
            v-for="service in business.services"
            :key="service.id"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <div class="flex items-center justify-center size-10 rounded-full icon-glass">
                  <Icon :name="service.icon.replace('i-lucide-', 'lucide:')" class="size-5" />
                </div>
                <h3 class="font-semibold text-lg text-ink">{{ service.name }}</h3>
              </div>
            </template>
            <p class="text-sm text-ink-muted">{{ service.description }}</p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Feature highlight — Nowoczesny sprzęt -->
    <section class="py-0 bg-page-alt overflow-hidden">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-0">
          <!-- Image -->
          <div class="relative h-64 md:h-auto md:min-h-[380px] overflow-hidden rounded-none">
            <NuxtImg
              src="/images/hero/hero-luty-na-plycie.png"
              alt="Nowoczesny sprzęt komputerowy — płyta główna"
              class="w-full h-full object-cover"
              width="800"
              height="500"
              loading="lazy"
            />
          </div>
          <!-- Text -->
          <div class="px-0 py-12 md:px-12 md:py-16">
            <p class="text-xs font-bold uppercase tracking-widest text-brand mb-3">Nowoczesny sprzęt</p>
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-ink" style="letter-spacing: -0.02em;">
              Nie cofamy się w czasie
            </h2>
            <p class="text-ink-muted text-base md:text-lg mb-8">
              Serwisujemy i składamy komputery z najnowszym sprzętem: chłodzenia wodne,
              płyty główne Intel i AMD, zasilacze modularne, obudowy ATX. Każde stanowisko
              testujemy przed wydaniem klientowi.
            </p>
            <Button to="/serwis" variant="outline" size="lg">
              <Icon name="lucide:arrow-right" class="size-4" />
              Zobacz usługi serwisowe
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Trust signals -->
    <section class="py-16 bg-page-alt">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p class="text-4xl font-extrabold text-brand mb-2">
              {{ new Date().getFullYear() - business.foundedYear }}+
            </p>
            <p class="text-ink-muted font-medium">Lat doświadczenia</p>
          </div>
          <div>
            <p class="text-4xl font-extrabold text-brand mb-2" aria-live="polite">
              <ClientOnly>
                {{ displayYear }}
                <template #fallback>{{ business.foundedYear }}</template>
              </ClientOnly>
            </p>
            <p class="text-ink-muted font-medium">Rok założenia</p>
          </div>
          <div>
            <p class="text-4xl font-extrabold text-brand mb-2">
              B2B
            </p>
            <p class="text-ink-muted font-medium">Obsługa firm z rabatami</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Contact CTA -->
    <section class="py-16 bg-page-alt">
      <Container>
        <div class="flex flex-col md:flex-row items-center justify-between gap-6 bg-card border border-card-border rounded-3xl px-8 py-10 shadow-sm">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold mb-2 text-ink">Problem z komputerem?</h2>
            <p class="text-ink-muted">
              Profesjonalnie pomożemy. Zadzwoń lub przyjdź do nas.
            </p>
          </div>
          <a
            :href="`tel:${business.contact.phone[0]?.replace(/\s/g, '') || ''}`"
            class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand text-white hover:bg-brand-hover font-semibold transition-all duration-300 shadow-glow pulse-brand shrink-0"
          >
            <Icon name="lucide:phone" class="size-5" />
            {{ business.contact.phone[0] }}
          </a>
        </div>
      </Container>
    </section>
  </div>
</template>
