<script setup lang="ts">
const business = useBusinessData()
const yearsActive = new Date().getFullYear() - business.foundedYear

useSeoMeta({
  title: 'O firmie — Neksus',
  description: `Poznaj historię firmy Neksus. Od ${business.foundedYear} roku oferujemy profesjonalny serwis komputerowy w Gdańsku.`,
  ogTitle: 'O firmie — Neksus',
  ogDescription: `Poznaj historię firmy Neksus. Od ${business.foundedYear} roku oferujemy profesjonalny serwis komputerowy w Gdańsku.`,
})
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-12 md:py-16 bg-page-alt">
      <Container>
        <div class="max-w-3xl">
          <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-ink" style="letter-spacing: -0.02em;">
            O firmie
          </h1>
          <p class="text-lg text-ink-muted">
            Poznaj historię i działalność firmy Neksus
          </p>
        </div>
      </Container>
    </section>

    <!-- About Content -->
    <section class="py-12">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 prose prose-neutral dark:prose-invert max-w-none">
            <h2>Krótko o nas</h2>
            <p>
              Firma została założona w <strong>{{ business.foundedYear }} roku</strong>. Od początku
              działalności NEKSUS zajmuje się sprzedażą i serwisem komputerów, podzespołów przede
              wszystkim dla odbiorców indywidualnych oraz małych i średnich przedsiębiorstw.
              Prowadzimy także sprzedaż hurtową tylko dla firm komputerowych.
            </p>

            <h2>Działalność firmy</h2>
            <p>
              Działamy głównie na terenie Trójmiasta, ale nie tylko. Oferujemy tylko dobre, markowe
              i sprawdzone podzespoły oraz najlepsze ceny. Współpracujemy z większością polskich
              dużych hurtowni i dystrybutorów sprzętu komputerowego, dzięki czemu możemy sprostać
              wszelkim oczekiwaniom Klientów.
            </p>
            <p>
              Pozwoliło to na zbudowanie dobrej marki naszej firmy i zdobycie wielu zadowolonych
              Klientów (zarówno detalicznych, szkół, Trójmiejskich uczelni oraz firm), z czego
              jesteśmy szczególnie dumni.
            </p>

            <h2>Naszym klientom oferujemy</h2>
            <ul>
              <li>Komputery, laptopy Toshiba, Lenovo, Apple, Acer, HP, Dell, Asus, Samsung</li>
              <li>Podzespoły i akcesoria: karty grafiki, płyty główne, procesory, monitory, drukarki, zasilacze, nagrywarki, tusze, tonery, flashdrive, przejściówki i adaptery, papier, gry</li>
              <li>Oprogramowanie dla firm i Klientów indywidualnych</li>
              <li>Sprzęt RTV AGD: aparaty cyfrowe, telewizory, kamery</li>
              <li>Serwis komputerowy gwarancyjny i pogwarancyjny, fachowe doradztwo, instalacje</li>
              <li>Kompleksowe usługi informatyczne (na życzenie dojazd do Klienta)</li>
            </ul>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:calendar" class="size-5 text-brand" />
                  <span class="font-semibold">Na rynku od</span>
                </div>
              </template>
              <p class="text-3xl font-bold text-brand">
                {{ business.foundedYear }}
              </p>
              <p class="text-sm text-ink-muted">{{ yearsActive }} lat doświadczenia</p>
            </Card>

            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:map-pin" class="size-5 text-brand" />
                  <span class="font-semibold">Siedziba</span>
                </div>
              </template>
              <p class="font-medium text-ink">{{ business.address.street }}</p>
              <p class="text-sm text-ink-muted">{{ business.address.postalCode }} {{ business.address.city }}</p>
            </Card>

            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:building" class="size-5 text-brand" />
                  <span class="font-semibold">Dane firmy</span>
                </div>
              </template>
              <p class="text-sm">{{ business.legalName }}</p>
            </Card>

            <Button to="/kontakt" block size="lg">
              <Icon name="lucide:phone" class="size-5" />
              Skontaktuj się
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <!-- Services Grid -->
    <section class="py-12 bg-page-alt">
      <Container>
        <h2 class="text-2xl font-bold mb-8 text-ink">Nasze usługi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card
            v-for="service in business.services"
            :key="service.id"
          >
            <template #header>
              <div class="flex items-center gap-3">
                <div class="flex items-center justify-center size-12 rounded-full icon-glass">
                  <Icon :name="service.icon.replace('i-lucide-', 'lucide:')" class="size-6" />
                </div>
                <h3 class="font-semibold text-ink">{{ service.name }}</h3>
              </div>
            </template>
            <p class="text-sm text-ink-muted">{{ service.description }}</p>
          </Card>
        </div>
      </Container>
    </section>
  </div>
</template>
