<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: 'Serwis komputerowy — Neksus Gdańsk',
  description: 'Profesjonalny serwis komputerowy w Gdańsku. Odwirusowanie, instalacja Windows, konfiguracja sieci, naprawa komputerów i laptopów.',
  ogTitle: 'Serwis komputerowy — Neksus Gdańsk',
  ogDescription: 'Profesjonalny serwis komputerowy w Gdańsku. Odwirusowanie, instalacja Windows, konfiguracja sieci, naprawa komputerów i laptopów.',
})

const serviceDetails = [
  {
    id: 'virus-removal',
    title: 'Odwirusowanie komputera',
    icon: 'i-lucide-shield-check',
    description: 'Usuwanie wirusów, trojanów, spyware, czyszczenie komputera ze złośliwego oprogramowania reklamowego, dialerów, malware. Oczyszczenie rejestru systemu Windows ze zbędnych wpisów, aby komputer działał jak najszybciej. Zainstalowanie zbioru poprawek systemu Windows, podnoszących jego bezpieczeństwo oraz oprogramowania antywirusowego, które ochroni komputer przed podobnymi problemami w przyszłości.',
  },
  {
    id: 'windows-install',
    title: 'Instalacja Windows bez utraty danych',
    icon: 'i-lucide-laptop',
    description: 'Zainstalowanie systemu operacyjnego MS Windows wraz z zestawem uaktualnień Service Pack, kompletem najnowszych sterowników, konfiguracja łącza internetowego oraz instalacja oprogramowania antywirusowego do jego optymalnego działania. Komputer będzie w pełni gotowy do pracy i korzystania z internetu. Jesteśmy w stanie przeinstalować system bez utraty danych, nawet w przypadku gdy poprzedni Windows nie uruchamia się.',
  },
  {
    id: 'windows-config',
    title: 'Konfiguracja MS Windows',
    icon: 'i-lucide-settings',
    description: 'Instalacja pełnego zestawu sterowników i oprogramowania (odtwarzacze, przeglądarki, archiwizatory, kodeki, antywirusy), konfiguracja połączenia internetowego, konfiguracja konta pocztowego.',
  },
  {
    id: 'device-install',
    title: 'Instalacja nowych urządzeń',
    icon: 'i-lucide-usb',
    description: 'Podłączenie i konfiguracja nowych urządzeń, kart rozszerzeń oraz napędów.',
  },
  {
    id: 'network-config',
    title: 'Konfiguracja łącza internetowego',
    icon: 'i-lucide-wifi',
    description: 'Konfiguracja routera, instalacja i konfiguracja podłączenia do internetu przez modem: Neostrada, Livebox, iPlus, Blueconnect. Konfiguracja sieci bezprzewodowych WiFi.',
  },
  {
    id: 'software-issues',
    title: 'Rozwiązywanie problemów software-owych',
    icon: 'i-lucide-bug',
    description: 'Usunięcie najpopularniejszych usterek konfiguracyjnych (np. brak dźwięku w komunikatorach internetowych typu Skype). Odzyskiwanie konta Windowsa zabezpieczonego hasłem — usunięcie zapomnianego hasła użytkownika Windows, które uniemożliwiało korzystanie z systemu.',
  },
  {
    id: 'data-backup',
    title: 'Archiwizacja danych',
    icon: 'i-lucide-database',
    description: 'Zapisanie cennych danych na nośnikach CD/CD-RW/DVD lub dyskach twardych. Backup danych przez uruchomienie na komputerze zewnętrznego systemu, dającego dostęp do plików, a następnie ich zgranie na przenośny dysk USB.',
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
              <Icon name="lucide:wrench" class="size-6" />
            </div>
            <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink" style="letter-spacing: -0.02em;">
              Serwis komputerowy
            </h1>
          </div>
          <p class="text-lg text-ink-muted">
            Działamy na terenie Trójmiasta oraz okolic. Jeśli jest to możliwe, dokonujemy napraw bezpośrednio u Klienta.
          </p>
        </div>
      </Container>
    </section>

    <!-- Services List -->
    <section class="py-12">
      <Container>
        <h2 class="text-2xl font-bold mb-8 text-ink">Oferta serwisowa</h2>
        <div class="space-y-6">
          <Card
            v-for="service in serviceDetails"
            :key="service.id"
          >
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center size-12 rounded-full bg-brand/10 text-brand">
                  <Icon :name="service.icon.replace('i-lucide-', 'lucide:')" class="size-6" />
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2 text-ink">{{ service.title }}</h3>
                <p class="text-ink-muted">{{ service.description }}</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Quick Services Grid -->
    <section class="py-12 bg-page-alt">
      <Container>
        <h2 class="text-2xl font-bold mb-8 text-ink">Wszystkie usługi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card
            v-for="service in business.services"
            :key="service.id"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <div class="flex items-center justify-center size-10 rounded-full bg-brand/10 text-brand">
                  <Icon :name="service.icon.replace('i-lucide-', 'lucide:')" class="size-5" />
                </div>
                <h3 class="font-semibold text-ink">{{ service.name }}</h3>
              </div>
            </template>
            <p class="text-sm text-ink-muted">{{ service.description }}</p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <section class="py-12">
      <Container>
        <div class="rounded-2xl bg-brand text-white p-8 md:p-10">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 class="text-xl md:text-2xl font-bold mb-2">Potrzebujesz naprawy?</h2>
              <p class="text-white/80">
                Skontaktuj się z nami. Profesjonalnie i szybko rozwiążemy problem.
              </p>
            </div>
            <div class="flex gap-3">
              <a
                :href="`tel:${business.contact.phone[0]?.replace(/\s/g, '') || ''}`"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-brand hover:bg-white/90 font-semibold transition-all duration-300 shadow-lg"
              >
                <Icon name="lucide:phone" class="size-4" />
                Zadzwoń
              </a>
              <NuxtLink
                to="/kontakt"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white text-white hover:bg-white/10 font-semibold transition-all duration-300"
              >
                <Icon name="lucide:map-pin" class="size-4" />
                Przyjdź do nas
              </NuxtLink>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Note -->
    <section class="py-8">
      <Container>
        <Alert color="info" title="Uwaga" description="Instalujemy oprogramowanie jedynie z nośników dostarczonych przez klienta.">
          <template #icon>
            <Icon name="lucide:info" class="size-5" />
          </template>
        </Alert>
      </Container>
    </section>
  </div>
</template>
