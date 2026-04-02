<script setup lang="ts">
const business = useBusinessData()
const currentYear = new Date().getFullYear()
const { isOpen, statusText, statusColor } = useOpenStatus()
const mobileMenuOpen = ref(false)
const route = useRoute()

const navLinks = [
  { label: 'Strona główna', to: '/' },
  { label: 'O firmie', to: '/o-firmie' },
  { label: 'Serwis', to: '/serwis' },
  { label: 'Gwarancja', to: '/gwarancja' },
  { label: 'Promocje', to: '/promocje' },
  { label: 'Porady', to: '/porady' },
  { label: 'Kontakt', to: '/kontakt' },
]

function isActive(to: string) {
  return route.path === to
}

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-page text-ink">

    <!-- ═══ HEADER ═══════════════════════════════════════════════════════════ -->
    <header class="sticky top-0 z-50 border-b border-nav-border glass">
      <Container>
        <nav class="flex items-center justify-between h-16">

          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center" aria-label="Neksus — strona główna">
            <img
              src="/images/logo-svg.svg"
              alt="Neksus logo"
              class="h-8 w-auto dark:hidden"
              width="133"
              height="40"
            />
            <img
              src="/images/logo-svg-dark.svg"
              alt="Neksus logo"
              class="h-8 w-auto hidden dark:block"
              width="133"
              height="40"
            />
          </NuxtLink>

          <!-- Desktop nav -->
          <div class="hidden md:flex items-center gap-1">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
              :class="isActive(link.to)
                ? 'text-brand bg-brand-subtle'
                : 'text-ink hover:text-brand hover:bg-brand-subtle'"
            >
              {{ link.label }}
            </NuxtLink>
          </div>

          <!-- Right side: color mode + mobile menu -->
          <div class="flex items-center gap-2">
            <ColorModeToggle />

            <!-- Mobile hamburger -->
            <button
              class="md:hidden p-2 rounded-lg text-ink-muted hover:text-brand hover:bg-brand/5 transition-all duration-300"
              aria-label="Otwórz menu"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <Icon name="lucide:menu" class="size-5" />
            </button>
          </div>

        </nav>

        <!-- Mobile menu (dropdown) -->
        <Transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="mobileMenuOpen" class="md:hidden pb-4 border-t border-nav-border mt-2 pt-2">
            <nav class="flex flex-col gap-1">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300"
                :class="isActive(link.to)
                  ? 'text-brand bg-brand-subtle'
                  : 'text-ink hover:text-brand hover:bg-brand-subtle'"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>
        </Transition>
      </Container>
    </header>

    <!-- ═══ MAIN ══════════════════════════════════════════════════════════════ -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- ═══ FOOTER ════════════════════════════════════════════════════════════ -->
    <footer class="border-t border-nav-border bg-page-alt">
      <Container class="py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <!-- Company info -->
          <div>
            <h3 class="font-bold text-lg mb-3 text-ink">{{ business.name }}</h3>
            <p class="text-sm text-ink-muted">{{ business.legalName }}</p>
            <p class="text-sm text-ink-muted mt-1">{{ business.address.street }}</p>
            <p class="text-sm text-ink-muted">{{ business.address.postalCode }} {{ business.address.city }}</p>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="font-bold text-lg mb-3 text-ink">Kontakt</h3>
            <div class="space-y-2">
              <a
                v-for="phone in business.contact.phone"
                :key="phone"
                :href="`tel:${phone.replace(/\s/g, '')}`"
                class="flex items-center gap-2 text-sm text-ink-muted hover:text-brand transition-colors duration-300"
              >
                <Icon name="lucide:phone" class="size-4 text-brand flex-shrink-0" />
                {{ phone }}
              </a>
              <a
                :href="`mailto:${business.contact.email}`"
                class="flex items-center gap-2 text-sm text-ink-muted hover:text-brand transition-colors duration-300"
              >
                <Icon name="lucide:mail" class="size-4 text-brand flex-shrink-0" />
                {{ business.contact.email }}
              </a>
            </div>
          </div>

          <!-- Hours -->
          <div>
            <h3 class="font-bold text-lg mb-3 text-ink">Godziny otwarcia</h3>
            <div class="flex items-center gap-2 mb-3">
              <Badge :color="statusColor" size="sm" dot>{{ statusText }}</Badge>
              <a
                :href="business.social.googleMaps"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-hover transition-colors duration-300"
              >
                <Icon name="lucide:navigation" class="size-3.5" />
                Nawiguj
              </a>
            </div>
            <div class="space-y-1 text-sm text-ink-muted">
              <p>Pon–Pt: 9:00 – 17:00</p>
              <p>Sob: 10:00 – 13:00</p>
              <p class="text-xs italic mt-2">{{ business.hours.summerNote }}</p>
            </div>
          </div>

        </div>

        <div class="mt-8 pt-6 border-t border-nav-border text-center text-sm text-ink-muted">
          <p>&copy; {{ currentYear }} {{ business.name }}. Wszelkie prawa zastrzeżone.</p>
        </div>
      </Container>
    </footer>

  </div>
</template>
