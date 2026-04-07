/**
 * Core business data for Neksus.
 * Single source of truth for company information used across all layers.
 */
export interface BusinessHours {
  day: string
  open: string
  close: string
  note?: string
}

export interface NeksusBusinessData {
  name: string
  legalName: string
  description: string
  foundedYear: number
  address: {
    street: string
    postalCode: string
    city: string
    country: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  contact: {
    phone: string[]
    email: string
  }
  hours: {
    regular: BusinessHours[]
    closed: string[]
  }
  services: {
    id: string
    name: string
    description: string
    icon: string
  }[]
  social: {
    googleMaps: string
  }
}

export function useBusinessData(): NeksusBusinessData {
  return {
    name: 'Neksus',
    legalName: 'NEKSUS SP.J. P. Scibisz L. Pietrzycki',
    description:
      'Profesjonalny serwis i sklep komputerowy w Gdańsku. Sprzedaż markowych podzespołów, naprawa laptopów, montaż komputerów, obsługa firm B2B. Od 1996 roku.',
    foundedYear: 1996,

    address: {
      street: 'ul. Kocurki 3',
      postalCode: '80-822',
      city: 'Gdańsk',
      country: 'PL',
    },

    geo: {
      latitude: 54.345669115718685,
      longitude: 18.649385240164257,
    },

    contact: {
      phone: ['+48 58 380 08 68', '+48 58 380 18 65'],
      email: 'biuro@neksus.pl',
    },

    hours: {
      regular: [
        { day: 'Monday', open: '09:00', close: '16:00' },
        { day: 'Tuesday', open: '09:00', close: '16:00' },
        { day: 'Wednesday', open: '09:00', close: '16:00' },
        { day: 'Thursday', open: '09:00', close: '16:00' },
        { day: 'Friday', open: '09:00', close: '16:00' },
      ],
      closed: ['Sobota – Niedziela', 'Święta'],
    },

    services: [
      {
        id: 'computer-repair',
        name: 'Serwis komputerowy',
        description: 'Profesjonalna naprawa komputerów i laptopów. Odwirusowanie, reinstalacja systemu, diagnostyka.',
        icon: 'i-lucide-wrench',
      },
      {
        id: 'pc-assembly',
        name: 'Montaż komputerów',
        description: 'Montaż jednostek z markowych podzespołów dla graczy i profesjonalistów.',
        icon: 'i-lucide-cpu',
      },
      {
        id: 'parts-sales',
        name: 'Sprzedaż podzespołów',
        description: 'Markowe podzespoły komputerowe w najlepszych cenach. Współpraca z polskimi dystrybutorami.',
        icon: 'i-lucide-shopping-bag',
      },
      {
        id: 'b2b-services',
        name: 'Obsługa firm (B2B)',
        description: 'Stała obsługa serwisowa dla firm. System rabatowy, umowy serwisowe, dojazd do klienta.',
        icon: 'i-lucide-building-2',
      },
      {
        id: 'data-recovery',
        name: 'Odzyskiwanie danych',
        description: 'Odzyskiwanie danych z dysków, nośników CD/DVD i pamięci USB.',
        icon: 'i-lucide-hard-drive',
      },
      {
        id: 'network-config',
        name: 'Konfiguracja sieci',
        description: 'Konfiguracja routerów, sieci WiFi, podłączenie do internetu, VPN dla firm.',
        icon: 'i-lucide-wifi',
      },
    ],

    social: {
      googleMaps: 'https://www.google.com/maps?q=54.345669115718685,18.649385240164257',
    },
  }
}
