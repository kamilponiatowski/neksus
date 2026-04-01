<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: 'Warunki gwarancji — Neksus',
  description: 'Warunki gwarancji na sprzęt komputerowy zakupiony w sklepie Neksus w Gdańsku.',
  ogTitle: 'Warunki gwarancji — Neksus',
  ogDescription: 'Warunki gwarancji na sprzęt komputerowy zakupiony w sklepie Neksus w Gdańsku.',
})

const warrantyTerms = [
  {
    id: 1,
    text: 'Nabywca zobowiązany jest przestrzegać podstawowych warunków eksploatacji: sprzęt musi być podłączony do sieci zasilającej 230V/50Hz wyposażonej w zerowanie ochronne, w pomieszczeniach o wilgotności 35-85% i temperaturze 15-30°C. Wszystkie elementy zestawu powinny być podłączone do tej samej fazy i wspólnie zerowane. Sprzęt powinien być umieszczony w pomieszczeniach o niewielkim stopniu zapylenia, nie powinien podlegać wibracjom ani znajdować się wśród źródeł elektromagnetycznych. Podłączanie jakichkolwiek części zestawu powinno się odbywać przy wyłączonym zasilaniu.',
  },
  {
    id: 2,
    text: 'W czasie trwania gwarancji jakiekolwiek usterki będą usuwane w ciągu 14 dni roboczych lub w przypadku skomplikowanych napraw okres ten może ulec przedłużeniu do 30 dni roboczych.',
  },
  {
    id: 3,
    text: 'Nabywca dostarcza na własny koszt do serwisu kompletny sprzęt w oryginalnych opakowaniach, wypisaną gwarancją, rachunkiem/fakturą zakupu.',
  },
  {
    id: 4,
    text: 'Nabywca powinien na własny koszt dokonywać czyszczenia, konserwacji, przeglądu sprzętu.',
  },
  {
    id: 5,
    text: 'Gwarancja nie obejmuje uszkodzeń: mechanicznych, wyładowań atmosferycznych, zalania, pożaru, wynikających z niewłaściwej eksploatacji, powstałych z winy lub niewiedzy Nabywcy, wynikających z używania nieoryginalnych materiałów eksploatacyjnych.',
  },
  {
    id: 6,
    text: 'NEKSUS nie ponosi żadnej odpowiedzialności za uszczerbek na zdrowiu jeżeli wynika on z niewłaściwego posługiwania się sprzętem lub jest ogólną konsekwencją długotrwałej pracy na nim.',
  },
  {
    id: 7,
    text: 'Naprawa gwarancyjna nie obejmuje czynności: konfiguracji sprzętu, usuwania wirusów, instalacji oprogramowania, konserwacji, czyszczenia (usługi odpłatne wg cennika), czynności przewidzianych w instrukcji obsługi lub instalacji.',
  },
  {
    id: 8,
    text: 'Nabywca traci gwarancję w przypadku naruszenia plomb gwarancyjnych, samowolnych napraw i przeróbek, samodzielnej rekonfiguracji i rozbudowy zakupionego sprzętu, uszkodzeń mechanicznych.',
  },
  {
    id: 9,
    text: 'Duplikaty gwarancji nie będą wydawane.',
  },
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-12 md:py-16 bg-page-alt">
      <Container>
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center justify-center size-12 rounded-full bg-brand/10 text-brand">
              <Icon name="lucide:shield" class="size-6" />
            </div>
            <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink" style="letter-spacing: -0.02em;">
              Warunki gwarancji
            </h1>
          </div>
          <p class="text-lg text-ink-muted">
            Informacje o gwarancji na produkty zakupione w {{ business.name }}
          </p>
        </div>
      </Container>
    </section>

    <!-- Warranty Info -->
    <section class="py-12">
      <Container>
        <div class="max-w-4xl">
          <Alert color="info" class="mb-8">
            <template #icon>
              <Icon name="lucide:info" class="size-5" />
            </template>
            <template #title>Informacja o gwarancji</template>
            <template #description>
              Firma <strong>NEKSUS</strong> udziela gwarancji na każdy z oferowanych produktów
              lub zostaje udzielona gwarancja fabryczna producenta, w przypadku której Nabywca
              zobowiązany jest zgłosić się do punktu serwisowego wskazanego w gwarancji.
            </template>
          </Alert>

          <h2 class="text-2xl font-bold mb-6 text-ink">Warunki gwarancji</h2>

          <div class="space-y-4">
            <Card
              v-for="term in warrantyTerms"
              :key="term.id"
            >
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center size-8 rounded-full bg-brand text-white font-bold text-sm">
                    {{ term.id }}
                  </div>
                </div>
                <p class="text-ink-muted">{{ term.text }}</p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- Contact for warranty -->
    <section class="py-12 bg-page-alt">
      <Container>
        <div class="max-w-4xl">
          <h2 class="text-2xl font-bold mb-6 text-ink">Zgłoszenie gwarancyjne</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:phone" class="size-5 text-brand" />
                  <span class="font-semibold">Kontakt telefoniczny</span>
                </div>
              </template>
              <div class="space-y-2">
                <a
                  v-for="phone in business.contact.phone"
                  :key="phone"
                  :href="`tel:${phone.replace(/\s/g, '')}`"
                  class="flex items-center gap-2 text-ink-muted hover:text-brand transition-colors duration-300"
                >
                  {{ phone }}
                </a>
              </div>
            </Card>

            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:map-pin" class="size-5 text-brand" />
                  <span class="font-semibold">Punkt serwisowy</span>
                </div>
              </template>
              <p>{{ business.address.street }}</p>
              <p class="text-ink-muted">{{ business.address.postalCode }} {{ business.address.city }}</p>
              <Button to="/kontakt" variant="link" class="mt-2">
                Zobacz na mapie
              </Button>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>
