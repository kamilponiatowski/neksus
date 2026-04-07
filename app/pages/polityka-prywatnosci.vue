<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: 'Polityka prywatności — Neksus',
  description: 'Polityka prywatności serwisu komputerowego Neksus w Gdańsku. Informacje o przetwarzaniu danych osobowych.',
  robots: 'noindex, follow',
})
</script>

<template>
  <div>
    <section class="py-12 md:py-16 bg-page-alt">
      <Container>
        <div class="max-w-3xl">
          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-2" style="letter-spacing: -0.02em;">
            Polityka prywatności
          </h1>
          <p class="text-ink-muted">Ostatnia aktualizacja: 7 kwietnia 2026</p>
        </div>
      </Container>
    </section>

    <section class="py-12">
      <Container>
        <div class="max-w-3xl prose prose-slate dark:prose-invert">

          <h2>1. Administrator danych</h2>
          <p>
            Administratorem Twoich danych osobowych jest
            <strong>{{ business.legalName }}</strong>,
            z siedzibą przy {{ business.address.street }},
            {{ business.address.postalCode }} {{ business.address.city }}.
          </p>
          <p>
            Kontakt z administratorem:
          </p>
          <ul>
            <li v-for="phone in business.contact.phone" :key="phone">
              Telefon: <a :href="`tel:${phone.replace(/\s/g, '')}`">{{ phone }}</a>
            </li>
            <li>Email: <a :href="`mailto:${business.contact.email}`">{{ business.contact.email }}</a></li>
          </ul>

          <h2>2. Jakie dane zbieramy</h2>
          <p>Zbieramy następujące kategorie danych osobowych:</p>
          <ul>
            <li><strong>Formularz kontaktowy</strong> — imię i nazwisko, numer telefonu, opcjonalnie adres email i treść wiadomości</li>
            <li><strong>Kontakt bezpośredni</strong> — dane podane w rozmowie telefonicznej lub korespondencji email</li>
            <li><strong>Dane automatyczne</strong> — adres IP, informacje o przeglądarce, pliki cookies (szczegóły w <NuxtLink to="/polityka-cookies" class="text-brand">Polityce cookies</NuxtLink>)</li>
          </ul>

          <h2>3. Cele i podstawy prawne przetwarzania</h2>
          <p>Przetwarzamy dane osobowe w następujących celach:</p>
          <ul>
            <li>
              <strong>Odpowiedź na zapytanie</strong> — realizacja umowy lub podjęcie działań na żądanie osoby
              (art. 6 ust. 1 lit. b RODO)
            </li>
            <li>
              <strong>Marketing i komunikacja</strong> — na podstawie wyrażonej zgody
              (art. 6 ust. 1 lit. a RODO)
            </li>
            <li>
              <strong>Obowiązki prawne</strong> — wypełnienie obowiązków prawnych ciążących na administratorze
              (art. 6 ust. 1 lit. c RODO)
            </li>
            <li>
              <strong>Uzasadniony interes</strong> — dochodzenie roszczeń, bezpieczeństwo IT
              (art. 6 ust. 1 lit. f RODO)
            </li>
          </ul>

          <h2>4. Okres przechowywania danych</h2>
          <p>
            Dane osobowe przechowujemy przez okres niezbędny do realizacji celu, dla którego zostały zebrane:
          </p>
          <ul>
            <li>Dane z formularza kontaktowego — do czasu zakończenia obsługi zapytania, nie dłużej niż 12 miesięcy</li>
            <li>Dane przetwarzane na podstawie zgody — do czasu jej cofnięcia</li>
            <li>Dane wynikające z obowiązków prawnych — przez okres wymagany przepisami prawa</li>
          </ul>

          <h2>5. Prawa użytkownika</h2>
          <p>W związku z przetwarzaniem danych osobowych przysługują Ci następujące prawa:</p>
          <ul>
            <li><strong>Prawo dostępu</strong> — uzyskanie informacji o przetwarzanych danych</li>
            <li><strong>Prawo do sprostowania</strong> — poprawienie nieprawidłowych danych</li>
            <li><strong>Prawo do usunięcia</strong> — żądanie usunięcia danych („prawo do bycia zapomnianym")</li>
            <li><strong>Prawo do ograniczenia przetwarzania</strong> — ograniczenie operacji na danych</li>
            <li><strong>Prawo do przenoszenia danych</strong> — otrzymanie danych w formacie nadającym się do odczytu maszynowego</li>
            <li><strong>Prawo do sprzeciwu</strong> — sprzeciw wobec przetwarzania danych</li>
            <li><strong>Prawo do skargi</strong> — wniesienie skargi do organu nadzorczego (Prezes UODO, ul. Stawki 2, 00-193 Warszawa)</li>
          </ul>
          <p>
            W celu skorzystania z powyższych praw, skontaktuj się z nami: <a :href="`mailto:${business.contact.email}`">{{ business.contact.email }}</a>.
          </p>

          <h2>6. Pliki cookies</h2>
          <p>
            Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania
            i zapamiętania preferencji użytkownika. Szczegółowe informacje znajdziesz w
            <NuxtLink to="/polityka-cookies" class="text-brand">Polityce cookies</NuxtLink>.
          </p>

          <h2>7. Zewnętrzni dostawcy usług</h2>
          <p>W ramach funkcjonowania strony korzystamy z usług podmiotów trzecich:</p>
          <ul>
            <li>
              <strong>Google Maps</strong> (Google LLC) — osadzenie mapy z lokalizacją firmy. Polityka prywatności:
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
            </li>
          </ul>

          <h2>8. Kontakt z Administratorem</h2>
          <p>
            W sprawach dotyczących ochrony danych osobowych prosimy o kontakt:
          </p>
          <ul>
            <li>Email: <a :href="`mailto:${business.contact.email}`">{{ business.contact.email }}</a></li>
            <li v-for="phone in business.contact.phone" :key="phone">
              Telefon: <a :href="`tel:${phone.replace(/\s/g, '')}`">{{ phone }}</a>
            </li>
            <li>
              Adres: {{ business.legalName }}, {{ business.address.street }},
              {{ business.address.postalCode }} {{ business.address.city }}
            </li>
          </ul>

        </div>
      </Container>
    </section>
  </div>
</template>
