/**
 * Generates Schema.org structured data for Neksus.
 * Uses @nuxtjs/seo useSchemaOrg composable under the hood.
 */
export function useNeksusSchema() {
  const business = useBusinessData()

  useSchemaOrg([
    defineLocalBusiness({
      name: business.name,
      description: business.description,
      image: '/images/neksus-storefront.jpg',
      address: {
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        postalCode: business.address.postalCode,
        addressCountry: business.address.country,
      },
      geo: {
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      telephone: business.contact.phone[0],
      email: business.contact.email,
      url: 'https://neksus.pl',
      priceRange: '$$',
      currenciesAccepted: 'PLN',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
        {
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '13:00',
          description: 'Closed on Saturdays from June to August',
        },
      ],
    }),
  ])
}
