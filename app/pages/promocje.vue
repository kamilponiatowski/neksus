<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: 'Promocje — Neksus',
  description: 'Aktualne promocje i rabaty w serwisie komputerowym Neksus w Gdańsku.',
  ogTitle: 'Promocje — Neksus',
  ogDescription: 'Aktualne promocje i rabaty w serwisie komputerowym Neksus w Gdańsku.',
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-12 md:py-16 bg-page-alt">
      <Container>
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center justify-center size-12 rounded-full icon-glass">
              <Icon name="lucide:percent" class="size-6" />
            </div>
            <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink" style="letter-spacing: -0.02em;">
              Promocje
            </h1>
          </div>
          <p class="text-lg text-ink-muted">
            Aktualne promocje i oferty specjalne
          </p>
        </div>
      </Container>
    </section>

    <!-- Current Promotion -->
    <section class="py-12">
      <Container>
        <div class="max-w-3xl">
          <div class="rounded-2xl border-2 border-brand bg-card overflow-hidden">
            <div class="px-5 py-4 border-b border-card-border">
              <div class="flex items-center gap-3">
                <div class="flex items-center justify-center size-14 rounded-full bg-brand text-white">
                  <Icon name="lucide:gift" class="size-7" />
                </div>
                <div>
                  <h2 class="text-xl font-bold text-ink">Co nowego</h2>
                  <p class="text-sm text-ink-muted">Aktualna promocja</p>
                </div>
              </div>
            </div>

            <div class="px-5 py-4">
              <div class="prose prose-neutral dark:prose-invert max-w-none">
                <p class="text-lg">
                  Dla klientów korzystających z <strong>usług serwisowych</strong> z ulotką reklamową lub na hasło:
                </p>

                <blockquote class="border-l-4 border-brand pl-4 py-2 my-6 rounded-r-lg">
                  <p class="text-2xl font-bold text-brand m-0">
                    "Serwis z ludzką twarzą"
                  </p>
                </blockquote>

                <p class="text-lg">
                  oferujemy <strong>korzystne rabaty</strong> na wszystkie usługi serwisowe.
                </p>
              </div>
            </div>

            <div class="px-5 py-4 border-t border-card-border">
              <div class="flex flex-col sm:flex-row gap-3">
                <Button to="/serwis" size="lg">
                  <Icon name="lucide:wrench" class="size-5" />
                  Zobacz usługi serwisowe
                </Button>
                <Button to="/kontakt" variant="outline" size="lg">
                  <Icon name="lucide:phone" class="size-5" />
                  Skontaktuj się
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- B2B Section -->
    <section class="py-12 bg-page-alt">
      <Container>
        <div class="max-w-3xl">
          <h2 class="text-2xl font-bold mb-6 text-ink">Oferta dla firm (B2B)</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:building-2" class="size-5 text-brand" />
                  <span class="font-semibold">System rabatowy</span>
                </div>
              </template>
              <p class="text-ink-muted">
                Dla stałych klientów biznesowych oferujemy atrakcyjny system rabatowy na sprzęt i usługi.
              </p>
            </Card>

            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:file-text" class="size-5 text-brand" />
                  <span class="font-semibold text-ink">Umowy serwisowe</span>
                </div>
              </template>
              <p class="text-ink-muted">
                Stała obsługa serwisowa z gwarantowanym czasem reakcji i preferencyjnymi stawkami.
              </p>
            </Card>

            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:truck" class="size-5 text-brand" />
                  <span class="font-semibold text-ink">Dojazd do klienta</span>
                </div>
              </template>
              <p class="text-ink-muted">
                Wykonujemy naprawy i konfiguracje bezpośrednio w siedzibie firmy na terenie Trójmiasta.
              </p>
            </Card>

            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:receipt" class="size-5 text-brand" />
                  <span class="font-semibold text-ink">Faktury VAT</span>
                </div>
              </template>
              <p class="text-ink-muted">
                Pełna dokumentacja księgowa, możliwość płatności przelewem z odroczonym terminem.
              </p>
            </Card>
          </div>

          <Button to="/kontakt" class="mt-6">
            <Icon name="lucide:mail" class="size-4" />
            Zapytaj o ofertę B2B
          </Button>
        </div>
      </Container>
    </section>
  </div>
</template>
