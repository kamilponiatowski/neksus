<script setup lang="ts">
const POPUP_KEY = 'neksus_no_popup'
const DELAY_MS = 45_000

const business = useBusinessData()
const show = ref(false)
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const phone = ref('')
const consent = ref(false)
const phoneError = ref('')

const today = () => new Date().toISOString().slice(0, 10)
const isSuppressed = () => localStorage.getItem(POPUP_KEY) === today()
const suppress = () => localStorage.setItem(POPUP_KEY, today())

onMounted(() => {
  if (isSuppressed()) return
  const t = setTimeout(() => {
    if (!isSuppressed()) show.value = true
  }, DELAY_MS)
  onUnmounted(() => clearTimeout(t))
})

watch(phone, (v) => {
  if (v.trim()) suppress()
})

const dismiss = () => {
  suppress()
  show.value = false
}

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/biuro@neksus.pl'

const submit = async () => {
  phoneError.value = ''

  if (!phone.value.trim()) {
    phoneError.value = 'Podaj numer telefonu.'
    return
  }

  if (!/^[+]?[\d\s()-]{7,18}$/.test(phone.value.trim())) {
    phoneError.value = 'Nieprawidłowy numer telefonu.'
    return
  }

  if (!consent.value) {
    phoneError.value = 'Wymagana zgoda na przetwarzanie danych.'
    return
  }

  status.value = 'sending'

  try {
    const res = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: 'Kontakt z popupu',
        phone: phone.value.trim(),
        _subject: 'Prośba o kontakt (popup) — neksus.pl',
        _template: 'table',
      }),
    })
    status.value = res.ok ? 'success' : 'error'
    if (res.ok) {
      suppress()
      setTimeout(() => { show.value = false }, 2000)
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-8"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-8"
      >
        <div
          v-if="show"
          class="fixed bottom-4 right-4 z-60 w-full max-w-sm"
        >
          <div class="bg-card border border-card-border rounded-2xl shadow-2xl p-6 relative">
            <!-- Close button -->
            <button
              class="absolute top-3 right-3 p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-page-alt transition-colors"
              aria-label="Zamknij"
              @click="dismiss"
            >
              <Icon name="lucide:x" class="size-5" />
            </button>

            <!-- Success state -->
            <div v-if="status === 'success'" class="text-center py-4">
              <div class="flex items-center justify-center size-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mx-auto mb-3">
                <Icon name="lucide:check" class="size-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p class="font-semibold text-ink">Dziękujemy!</p>
              <p class="text-sm text-ink-muted mt-1">Oddzwonimy najszybciej jak to możliwe.</p>
            </div>

            <!-- Form -->
            <template v-else>
              <div class="flex items-center gap-3 mb-4">
                <div class="flex items-center justify-center size-10 rounded-full icon-glass">
                  <Icon name="lucide:phone" class="size-5" />
                </div>
                <div>
                  <p class="font-bold text-ink">Oddzwonimy do Ciebie</p>
                  <p class="text-xs text-ink-muted">Zostaw numer — kontakt w ciągu 24h</p>
                </div>
              </div>

              <div class="space-y-3">
                <div>
                  <input
                    v-model="phone"
                    type="tel"
                    placeholder="+48 123 456 789"
                    class="w-full px-4 py-2.5 rounded-lg border border-card-border bg-page text-ink placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors text-sm"
                  />
                  <p v-if="phoneError" class="text-red-500 text-xs mt-1">{{ phoneError }}</p>
                </div>

                <label class="flex items-start gap-2 cursor-pointer">
                  <input
                    v-model="consent"
                    type="checkbox"
                    class="mt-0.5 size-4 rounded border-card-border text-brand focus:ring-brand/50"
                  />
                  <span class="text-xs text-ink-muted">
                    Zgadzam się na przetwarzanie danych —
                    <NuxtLink to="/polityka-prywatnosci" class="text-brand hover:underline">Polityka prywatności</NuxtLink>
                  </span>
                </label>

                <!-- Error -->
                <p v-if="status === 'error'" class="text-red-500 text-xs">
                  Wystąpił błąd. Zadzwoń: {{ business.contact.phone[0] }}
                </p>

                <button
                  :disabled="status === 'sending'"
                  class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand text-white font-semibold text-sm hover:bg-brand-hover transition-all duration-300 disabled:pointer-events-none disabled:opacity-70"
                  @click="submit"
                >
                  <Icon v-if="status === 'sending'" name="lucide:loader-2" class="size-4 animate-spin" />
                  <Icon v-else name="lucide:phone-outgoing" class="size-4" />
                  {{ status === 'sending' ? 'Wysyłanie...' : 'Proszę o kontakt' }}
                </button>
              </div>
            </template>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
