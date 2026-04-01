/**
 * Computes whether the shop is currently open based on business hours.
 * Accounts for summer Saturday closures (June-August).
 */
export function useOpenStatus() {
  const business = useBusinessData()

  const isOpen = computed(() => {
    const now = new Date()
    const dayIndex = now.getDay()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentMonth = now.getMonth() // 0-indexed

    // Sunday = 0, closed
    if (dayIndex === 0) return false

    // Saturday = 6
    if (dayIndex === 6) {
      // June (5) to August (7) — closed on Saturdays
      if (currentMonth >= 5 && currentMonth <= 7) return false

      const saturdayHours = business.hours.regular.find(h => h.day === 'Saturday')
      if (!saturdayHours) return false

      return isWithinHours(currentHour, currentMinute, saturdayHours.open, saturdayHours.close)
    }

    // Monday-Friday
    const weekdayHours = business.hours.regular[0]
    if (!weekdayHours) return false
    return isWithinHours(currentHour, currentMinute, weekdayHours.open, weekdayHours.close)
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
