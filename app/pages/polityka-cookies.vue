<script setup lang="ts">
const business = useBusinessData()

useSeoMeta({
  title: 'Polityka cookies — Neksus',
  description: 'Polityka cookies serwisu komputerowego Neksus. Informacje o plikach cookies używanych na stronie.',
  robots: 'noindex, follow',
})
</script>

<template>
  <div>
    <section class="py-12 md:py-16 bg-page-alt">
      <Container>
        <div class="max-w-3xl">
          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-ink mb-2" style="letter-spacing: -0.02em;">
            Polityka cookies
          </h1>
          <p class="text-ink-muted">Ostatnia aktualizacja: 7 kwietnia 2026</p>
        </div>
      </Container>
    </section>

    <section class="py-12">
      <Container>
        <div class="max-w-3xl prose prose-slate dark:prose-invert">

          <h2>1. Czym są pliki cookies</h2>
          <p>
            Pliki cookies (tzw. „ciasteczka") to niewielkie pliki tekstowe przechowywane
            na urządzeniu użytkownika przez przeglądarkę internetową. Służą do zapamiętania
            preferencji, zapewnienia prawidłowego działania strony oraz celów analitycznych.
          </p>

          <h2>2. Administrator</h2>
          <p>
            Administratorem strony jest <strong>{{ business.legalName }}</strong>,
            z siedzibą przy {{ business.address.street }},
            {{ business.address.postalCode }} {{ business.address.city }}.
          </p>

          <h2>3. Rodzaje cookies</h2>

          <h3>Cookies techniczne / niezbędne</h3>
          <p>
            Te pliki cookies są niezbędne do prawidłowego działania strony i nie wymagają zgody użytkownika.
          </p>

          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Nazwa</th>
                  <th>Cel</th>
                  <th>Czas życia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>color-mode</code></td>
                  <td>Zapamiętanie preferencji motywu jasnego/ciemnego</td>
                  <td>Sesja</td>
                </tr>
                <tr>
                  <td><code>neksus_cookies_consent</code></td>
                  <td>Przechowanie decyzji użytkownika dotyczącej cookies</td>
                  <td>1 rok</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Cookies funkcjonalne</h3>
          <p>
            Te pliki cookies służą do zapamiętania preferencji i wyborów użytkownika
            w celu poprawy doświadczenia korzystania ze strony.
          </p>

          <div class="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Nazwa</th>
                  <th>Cel</th>
                  <th>Czas życia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>neksus_no_popup</code></td>
                  <td>Wyciszenie popupu kontaktowego na dany dzień</td>
                  <td>1 dzień</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>4. Cookies podmiotów trzecich</h2>
          <p>
            Na naszej stronie osadzamy mapę Google Maps, która może ustawiać własne pliki cookies.
            Dotyczy to domeny <code>maps.google.com</code>.
          </p>
          <p>
            Więcej informacji:
            <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
              Polityka cookies Google
            </a>
          </p>

          <h2>5. Zarządzanie cookies</h2>
          <p>
            Możesz samodzielnie zarządzać plikami cookies w ustawieniach swojej przeglądarki.
            Poniżej znajdziesz instrukcje dla najpopularniejszych przeglądarek:
          </p>
          <ul>
            <li>
              <strong>Google Chrome</strong> —
              Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie i inne dane witryn
            </li>
            <li>
              <strong>Mozilla Firefox</strong> —
              Ustawienia → Prywatność i bezpieczeństwo → Ciasteczka i dane stron
            </li>
            <li>
              <strong>Safari</strong> —
              Preferencje → Prywatność → Zarządzaj danymi witryn
            </li>
            <li>
              <strong>Microsoft Edge</strong> —
              Ustawienia → Pliki cookie i uprawnienia witryn → Zarządzaj plikami cookie
            </li>
          </ul>
          <p>
            Wyłączenie plików cookies może wpłynąć na prawidłowe działanie niektórych
            funkcji strony (np. zapamiętanie motywu kolorystycznego).
          </p>

          <h2>6. Zmiany polityki cookies</h2>
          <p>
            Zastrzegamy sobie prawo do zmiany niniejszej Polityki cookies.
            O wszelkich istotnych zmianach poinformujemy użytkowników poprzez
            aktualizację daty na początku dokumentu.
          </p>

          <h2>7. Kontakt</h2>
          <p>
            W razie pytań dotyczących plików cookies prosimy o kontakt:
          </p>
          <ul>
            <li>Email: <a :href="`mailto:${business.contact.email}`">{{ business.contact.email }}</a></li>
            <li v-for="phone in business.contact.phone" :key="phone">
              Telefon: <a :href="`tel:${phone.replace(/\s/g, '')}`">{{ phone }}</a>
            </li>
          </ul>

        </div>
      </Container>
    </section>
  </div>
</template>
