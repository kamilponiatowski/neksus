<script setup lang="ts">
const business = useBusinessData()
const { isOpen, statusText, statusColor } = useOpenStatus()

useSeoMeta({
  title: 'Kontakt — Neksus Gdańsk',
  description: `Skontaktuj się z serwisem komputerowym Neksus w Gdańsku. ${business.address.street}, telefon: ${business.contact.phone[0]}.`,
  ogTitle: 'Kontakt — Neksus Gdańsk',
  ogDescription: `Skontaktuj się z serwisem komputerowym Neksus w Gdańsku. ${business.address.street}, telefon: ${business.contact.phone[0]}.`,
})

// Form state
const formData = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
  consent: false,
})

const formErrors = reactive({
  name: '',
  phone: '',
  email: '',
  consent: '',
})

const formStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

function validateForm(): boolean {
  formErrors.name = ''
  formErrors.phone = ''
  formErrors.email = ''
  formErrors.consent = ''

  let valid = true

  if (!formData.name.trim()) {
    formErrors.name = 'Podaj imię i nazwisko.'
    valid = false
  }

  if (!formData.phone.trim()) {
    formErrors.phone = 'Podaj numer telefonu.'
    valid = false
  } else if (!/^[+]?[\d\s()-]{7,18}$/.test(formData.phone.trim())) {
    formErrors.phone = 'Nieprawidłowy numer telefonu.'
    valid = false
  }

  if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    formErrors.email = 'Nieprawidłowy adres email.'
    valid = false
  }

  if (!formData.consent) {
    formErrors.consent = 'Wymagana zgoda na przetwarzanie danych.'
    valid = false
  }

  return valid
}

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/biuro@neksus.pl'

async function submitForm() {
  if (!validateForm()) return

  formStatus.value = 'sending'

  try {
    const res = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        message: formData.message.trim() || undefined,
        _subject: `Nowe zapytanie ze strony — ${formData.name.trim()}`,
        _template: 'table',
      }),
    })

    if (res.ok) {
      formStatus.value = 'success'
      formData.name = ''
      formData.phone = ''
      formData.email = ''
      formData.message = ''
      formData.consent = false
      localStorage.setItem('neksus_no_popup', new Date().toISOString().slice(0, 10))
    } else {
      formStatus.value = 'error'
    }
  } catch {
    formStatus.value = 'error'
  }
}

function resetForm() {
  formStatus.value = 'idle'
}
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
            <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-ink" style="letter-spacing: -0.02em;">
              Kontakt
            </h1>
          </div>
          <p class="text-lg text-ink-muted">
            Napisz do nas, zadzwoń lub odwiedź nasz serwis
          </p>
        </div>
      </Container>
    </section>

    <!-- Form + Sidebar -->
    <section class="py-12">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:mail" class="size-5 text-brand" />
                  <span class="font-semibold text-ink">Formularz kontaktowy</span>
                </div>
              </template>

              <!-- Success state -->
              <div v-if="formStatus === 'success'" class="py-8 text-center">
                <div class="flex items-center justify-center size-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mx-auto mb-4">
                  <Icon name="lucide:check" class="size-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 class="text-xl font-bold text-ink mb-2">Wiadomość wysłana!</h3>
                <p class="text-ink-muted mb-6">Skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
                <Button variant="outline" size="md" @click="resetForm">
                  Wyślij kolejną wiadomość
                </Button>
              </div>

              <!-- Form -->
              <form v-else @submit.prevent="submitForm" class="space-y-4">
                <!-- Error alert -->
                <Alert v-if="formStatus === 'error'" color="error">
                  <template #icon>
                    <Icon name="lucide:alert-circle" class="size-5" />
                  </template>
                  <template #title>Nie udało się wysłać wiadomości</template>
                  <template #description>
                    Spróbuj ponownie lub zadzwoń pod numer {{ business.contact.phone[0] }}.
                  </template>
                </Alert>

                <!-- Name -->
                <div>
                  <label for="contact-name" class="block text-sm font-medium text-ink mb-1">Imię i nazwisko *</label>
                  <input
                    id="contact-name"
                    v-model="formData.name"
                    type="text"
                    autocomplete="name"
                    class="w-full px-4 py-2.5 rounded-lg border border-card-border bg-page text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors"
                    placeholder="Jan Kowalski"
                  />
                  <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">{{ formErrors.name }}</p>
                </div>

                <!-- Phone -->
                <div>
                  <label for="contact-phone" class="block text-sm font-medium text-ink mb-1">Telefon *</label>
                  <input
                    id="contact-phone"
                    v-model="formData.phone"
                    type="tel"
                    autocomplete="tel"
                    class="w-full px-4 py-2.5 rounded-lg border border-card-border bg-page text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors"
                    placeholder="+48 123 456 789"
                  />
                  <p v-if="formErrors.phone" class="text-red-500 text-sm mt-1">{{ formErrors.phone }}</p>
                </div>

                <!-- Email -->
                <div>
                  <label for="contact-email" class="block text-sm font-medium text-ink mb-1">
                    Email <span class="text-ink-muted">(opcjonalnie)</span>
                  </label>
                  <input
                    id="contact-email"
                    v-model="formData.email"
                    type="email"
                    autocomplete="email"
                    class="w-full px-4 py-2.5 rounded-lg border border-card-border bg-page text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors"
                    placeholder="jan@przyklad.pl"
                  />
                  <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">{{ formErrors.email }}</p>
                </div>

                <!-- Message -->
                <div>
                  <label for="contact-message" class="block text-sm font-medium text-ink mb-1">
                    Wiadomość <span class="text-ink-muted">(opcjonalnie)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    v-model="formData.message"
                    rows="4"
                    class="w-full px-4 py-2.5 rounded-lg border border-card-border bg-page text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors resize-y"
                    placeholder="Opisz swoje zapytanie..."
                  />
                </div>

                <!-- Consent -->
                <div>
                  <label class="flex items-start gap-3 cursor-pointer">
                    <input
                      v-model="formData.consent"
                      type="checkbox"
                      class="mt-1 size-4 rounded border-card-border text-brand focus:ring-brand/50"
                    />
                    <span class="text-sm text-ink-muted">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
                      <NuxtLink to="/polityka-prywatnosci" class="text-brand hover:underline">Polityką prywatności</NuxtLink>. *
                    </span>
                  </label>
                  <p v-if="formErrors.consent" class="text-red-500 text-sm mt-1">{{ formErrors.consent }}</p>
                </div>

                <!-- Submit -->
                <button
                  type="submit"
                  :disabled="formStatus === 'sending'"
                  class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand text-white font-semibold hover:bg-brand-hover transition-all duration-300 shadow-glow disabled:pointer-events-none disabled:opacity-70"
                >
                  <Icon v-if="formStatus === 'sending'" name="lucide:loader-2" class="size-5 animate-spin" />
                  <Icon v-else name="lucide:send" class="size-5" />
                  {{ formStatus === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość' }}
                </button>
              </form>
            </Card>
          </div>

          <!-- Sidebar — Contact Cards -->
          <div class="lg:col-span-2 space-y-5">
            <!-- Phone -->
            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:phone" class="size-5 text-brand" />
                  <span class="font-semibold text-ink">Telefon</span>
                </div>
              </template>
              <div class="space-y-2">
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
                  <span class="font-semibold text-ink">Email</span>
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

            <!-- Address -->
            <Card>
              <template #header>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:map-pin" class="size-5 text-brand" />
                  <span class="font-semibold text-ink">Adres</span>
                </div>
              </template>
              <div>
                <p class="font-medium text-ink">{{ business.name }}</p>
                <p class="text-sm text-ink-muted">{{ business.legalName }}</p>
                <p class="mt-2 text-ink">{{ business.address.street }}</p>
                <p class="text-ink">{{ business.address.postalCode }} {{ business.address.city }}</p>
              </div>
              <template #footer>
                <a
                  :href="business.social.googleMaps"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
                >
                  <Icon name="lucide:navigation" class="size-4" />
                  Otwórz w Google Maps
                </a>
              </template>
            </Card>

            <!-- Hours -->
            <Card>
              <template #header>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <Icon name="lucide:clock" class="size-5 text-brand" />
                    <span class="font-semibold text-ink">Godziny otwarcia</span>
                  </div>
                  <ClientOnly>
                    <Badge :color="statusColor" size="sm" dot>{{ statusText }}</Badge>
                  </ClientOnly>
                </div>
              </template>
              <div class="space-y-2">
                <div class="flex justify-between py-2 border-b border-card-border">
                  <span class="text-ink">Poniedziałek – Piątek</span>
                  <span class="font-medium text-ink">9:00 – 16:00</span>
                </div>
                <div
                  v-for="day in business.hours.closed"
                  :key="day"
                  class="flex justify-between py-2 border-b border-card-border last:border-0"
                >
                  <span class="text-ink">{{ day }}</span>
                  <span class="font-medium text-ink-muted">Nieczynne</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>

    <!-- Google Maps -->
    <section class="py-12 bg-page-alt">
      <Container>
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 class="text-2xl font-bold text-ink">Znajdź nas na mapie</h2>
          <a
            :href="business.social.googleMaps"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand text-white font-semibold hover:bg-brand-hover transition-all duration-300 shadow-glow text-sm"
          >
            <Icon name="lucide:navigation" class="size-4" />
            Nawiguj do nas
          </a>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg border border-card-border aspect-video">
          <iframe
            :src="`https://maps.google.com/maps?q=${business.geo.latitude},${business.geo.longitude}&z=15&output=embed`"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Mapa lokalizacji Neksus"
          />
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
