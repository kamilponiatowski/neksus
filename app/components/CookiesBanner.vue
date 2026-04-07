<script setup lang="ts">
const STORAGE_KEY = 'neksus_cookies_consent'
const show = ref(false)

onMounted(() => {
  if (!localStorage.getItem(STORAGE_KEY)) show.value = true
})

const accept = () => {
  localStorage.setItem(STORAGE_KEY, 'accepted')
  show.value = false
}

const reject = () => {
  localStorage.setItem(STORAGE_KEY, 'rejected')
  show.value = false
}
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
      >
        <div
          v-if="show"
          class="fixed bottom-0 inset-x-0 z-50 p-4"
        >
          <div class="max-w-4xl mx-auto bg-card border border-card-border rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <Icon name="lucide:cookie" class="size-5 text-brand shrink-0" />
                <p class="font-semibold text-sm text-ink">Pliki cookies</p>
              </div>
              <p class="text-sm text-ink-muted">
                Używamy plików cookies, aby zapewnić prawidłowe działanie strony i zapamiętać Twoje preferencje.
                <NuxtLink to="/polityka-cookies" class="text-brand hover:underline">Dowiedz się więcej</NuxtLink>
              </p>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <button
                class="px-4 py-2 text-sm font-medium rounded-lg border border-ink/20 text-ink hover:border-brand hover:text-brand transition-colors dark:border-ink-muted/30"
                @click="reject"
              >
                Odrzuć
              </button>
              <button
                class="px-4 py-2 text-sm font-semibold rounded-lg bg-brand text-white hover:bg-brand-hover transition-colors"
                @click="accept"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
