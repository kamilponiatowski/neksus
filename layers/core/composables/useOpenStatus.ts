/**
 * Computes whether the shop is currently open based on business hours.
 * Runs client-side only (onMounted) to avoid SSR time mismatch.
 */
export function useOpenStatus() {
  const business = useBusinessData()

  // Default false — safe SSR fallback (shows "Zamknięte" before hydration)
  const isOpen = ref(false)

  function computeOpenStatus() {
    const now = new Date()
    const dayIndex = now.getDay()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()

    // Sunday = 0 or Saturday = 6, closed
    if (dayIndex === 0 || dayIndex === 6) {
      isOpen.value = false
      return
    }

    // Monday-Friday
    const weekdayHours = business.hours.regular[0]
    if (!weekdayHours) {
      isOpen.value = false
      return
    }
    isOpen.value = isWithinHours(currentHour, currentMinute, weekdayHours.open, weekdayHours.close)
  }

  // Only runs in browser — avoids SSR/SSG time mismatch
  onMounted(() => {
    computeOpenStatus()
  })

  const statusText = computed(() => (isOpen.value ? 'Otwarte' : 'Zamknięte'))
  const statusColor = computed(() => (isOpen.value ? 'success' : 'error'))

  return { isOpen, statusText, statusColor }
}

function isWithinHours(hour: number, minute: number, open: string, close: string): boolean {
  const openParts = open.split(':').map(Number)
  const closeParts = close.split(':').map(Number)
  const openH = openParts[0] ?? 0
  const openM = openParts[1] ?? 0
  const closeH = closeParts[0] ?? 0
  const closeM = closeParts[1] ?? 0
  const current = hour * 60 + minute
  const openTime = openH * 60 + openM
  const closeTime = closeH * 60 + closeM
  return current >= openTime && current < closeTime
}
