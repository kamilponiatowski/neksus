<script setup lang="ts">
const business = useBusinessData()
const { isOpen, statusText, statusColor } = useOpenStatus()

useSeoMeta({
  title: 'Kontakt — Neksus Gdańsk',
  description: `Skontaktuj się z serwisem komputerowym Neksus w Gdańsku. ${business.address.street}, telefon: ${business.contact.phone[0]}.`,
  ogTitle: 'Kontakt — Neksus Gdańsk',
  ogDescription: `Skontaktuj się z serwisem komputerowym Neksus w Gdańsku. ${business.address.street}, telefon: ${business.contact.phone[0]}.`,
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-12 md:py-16 bg-page-alt">
      <Container>
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center justify-center size-14 rounded-full icon-glass">
              <Icon name="lucide:map-pin" class="size-7" />
            </div>
            <div>
              <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink" style="letter-spacing: -0.02em;">
                Kontakt
              </h1>
            </div>
          </div>
          <p class="text-lg text-ink-muted">
            Odwiedź nas lub skontaktuj się telefonicznie
          </p>
        </div>
      </Container>
    </section>

    <!-- Contact Info -->
    <section class="py-12">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Contact Details -->
          <div class="space-y-6">
            <!-- Open Status Card removed — status moved to Page Header -->

            <!-- Address -->
            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:building" class="size-5 text-brand" />
                  <span class="font-semibold text-ink">Adres</span>
                </div>
              </template>
              <div>
                <p class="font-medium text-lg text-ink">{{ business.name }}</p>
                <p class="text-ink-muted">{{ business.legalName }}</p>
                <p class="mt-2 text-ink">{{ business.address.street }}</p>
                <p class="text-ink">{{ business.address.postalCode }} {{ business.address.city }}</p>
              </div>
              <template #footer>
                <Button
                  :href="business.social.googleMaps"
                  target="_blank"
                  variant="outline"
                  size="sm"
                >
                  <Icon name="lucide:map" class="size-4" />
                  Otwórz w Google Maps
                </Button>
              </template>
            </Card>

            <!-- Phone Numbers -->
            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:phone" class="size-5 text-brand" />
                  <span class="font-semibold">Telefon</span>
                </div>
              </template>
              <div class="space-y-3">
                <a
                  v-for="phone in business.contact.phone"
                  :key="phone"
                  :href="`tel:${phone.replace(/\s/g, '')}`"
                  class="flex items-center gap-3 p-3 rounded-lg bg-page-alt hover:bg-brand/5 transition-all duration-300"
                >
                  <Icon name="lucide:phone-call" class="size-5 text-brand" />
                  <span class="font-medium text-ink">{{ phone }}</span>
                </a>
              </div>
            </Card>

            <!-- Email -->
            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:mail" class="size-5 text-brand" />
                  <span class="font-semibold">Email</span>
                </div>
              </template>
              <a
                :href="`mailto:${business.contact.email}`"
                class="flex items-center gap-3 p-3 rounded-lg bg-page-alt hover:bg-brand/5 transition-all duration-300"
              >
                <Icon name="lucide:send" class="size-5 text-brand" />
                <span class="font-medium text-ink">{{ business.contact.email }}</span>
              </a>
            </Card>
          </div>

          <!-- Hours & Map -->
          <div class="space-y-6">
            <!-- Opening Hours -->
            <Card>
              <template #header>
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <Icon name="lucide:clock" class="size-5 text-brand" />
                    <span class="font-semibold">Godziny otwarcia</span>
                  </div>
                  <Badge :color="statusColor" size="sm" dot>
                    <Icon :name="isOpen ? 'lucide:door-open' : 'lucide:door-closed'" class="size-3.5 mr-1" />
                    {{ statusText }}
                  </Badge>
                </div>
              </template>
              <div class="space-y-2">
                <div class="flex justify-between py-2 border-b border-card-border last:border-0">
                  <span class="text-ink">Poniedziałek - Piątek</span>
                  <span class="font-medium text-ink">9:00 - 16:00</span>
                </div>
                <div class="flex justify-between py-2 border-b border-card-border last:border-0">
                  <span class="text-ink">Sobota - Niedziela</span>
                  <span class="font-medium text-ink-muted">Nieczynne</span>
                </div>
              </div>

            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <section class="py-12 bg-brand text-white">
      <Container>
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">Masz pytania?</h2>
          <p class="text-white/80 mb-6 max-w-xl mx-auto">
            Zadzwoń do nas lub przyjdź osobiście. Chętnie pomożemy i doradzimy w wyborze sprzętu.
          </p>
          <a
            :href="`tel:${business.contact.phone[0]?.replace(/\s/g, '') || ''}`"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand hover:bg-white/90 font-semibold transition-all duration-300 shadow-lg"
          >
            <Icon name="lucide:phone" class="size-5" />
            {{ business.contact.phone[0] }}
          </a>
        </div>
      </Container>
    </section>
  </div>
</template>
