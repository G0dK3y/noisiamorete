import type { Project } from "@/types/project"

export type EventCta = {
  label: string
  href: string
  variant?: "default" | "outline"
  external?: boolean
}

export type EventSession = {
  dateLabel: string
  timeLabel: string
  note?: string
}

export type EventItem = {
  slug: string
  title: string
  tagline: string
  date: Date
  dateLabel: string
  timeLabel: string
  sessions?: EventSession[]
  locationLabel: string
  description: string
  /** Tag usati quando l'evento concluso diventa un progetto */
  tags?: string[]
  poster: { src: string; alt: string }
  extraPoster?: { src: string; alt: string; label: string }
  ctas: EventCta[]
}

const EVENTS: EventItem[] = [
  {
    slug: "a-tutto-campo-vigna-fiorita",
    title: "A Tutto Campo",
    tagline: "Padel e Tennis senza barriere",
    date: new Date("2026-06-13T10:00:00+02:00"),
    dateLabel: "Tre giornate — maggio e giugno 2026",
    timeLabel: "Vedi calendario",
    sessions: [
      { dateLabel: "Domenica 31 maggio", timeLabel: "Ore 9:00", note: "Apertura e avviamento allo sport" },
      { dateLabel: "Mercoledì 10 giugno", timeLabel: "Ore 10:00", note: "Allenamento e gioco guidato" },
      { dateLabel: "Sabato 13 giugno", timeLabel: "Ore 10:00", note: "Giornata conclusiva e tornei inclusivi" },
    ],
    locationLabel: "Tennis Club Vigna Fiorita, Via Quarto Sant'Antonio SNC, Ciampino (RM)",
    description:
      "Tre giornate gratuite di Padel e Tennis con il Tennis Club Vigna Fiorita e il patrocinio del CIP Lazio. Supporto tecnico di Monia Franchi; i volontari di Rete Italiana Disabili garantiscono accompagnamento e assistenza mirata a partecipanti con disabilità anche complesse.",
    tags: ["sport", "tennis", "inclusione"],
    poster: {
      src: "/images/home/eventi/a_tutto_campo.webp",
      alt: "Locandina A Tutto Campo: tre giornate di padel e tennis al Tennis Club Vigna Fiorita di Ciampino",
    },
    ctas: [
      {
        label: "Prenota via WhatsApp",
        href: "https://wa.me/393926271434",
        external: true,
      },
    ],
  },
  {
    slug: "prenditi-cura-di-te-catania",
    title: "Prenditi cura di te",
    tagline: "Percorso di benessere psicologico per caregiver",
    date: new Date("2026-05-29T18:30:00+02:00"),
    dateLabel: "Venerdì 29 maggio 2026",
    timeLabel: "Ore 18:30–20:30",
    sessions: [
      {
        dateLabel: "Venerdì 29 maggio",
        timeLabel: "Ore 18:30–20:30",
        note: "Theatrike — laboratorio d'improvvisazione teatrale",
      },
    ],
    locationLabel: "Piazza Scammacca 9, 95131 Catania (CT)",
    description:
      "Sei incontri promossi da Rete Italiana Disabili Sicilia con il Comune di Catania: cura di sé, identità genitoriale, meditazione, condivisione e improvvisazione teatrale. Alle 19:30 “pillole di vino” con ONAV Catania e brindisi offerto da Piazza Scammacca.",
    tags: ["benessere", "caregiver", "salute mentale"],
    poster: {
      src: "/images/home/eventi/prenditi_cura_di_te.webp",
      alt: "Locandina Prenditi cura di te: percorso di benessere psicologico per caregiver a Catania",
    },
    ctas: [
      {
        label: "Info via WhatsApp",
        href: "https://wa.me/393286230602",
        external: true,
      },
    ],
  },
  {
    slug: "festa-primavera-castel-gandolfo",
    title: "La Grande Festa di Primavera",
    tagline: "More Love, Less Barriers — Noi Siamo Rete",
    date: new Date("2026-05-24T10:30:00+02:00"),
    dateLabel: "Domenica 24 maggio 2026",
    timeLabel: "Accoglienza dalle 10:30",
    locationLabel: "Tenuta Mosaico, Castel Gandolfo (RM)",
    description:
      "Una giornata di gioia, natura e inclusione: laboratorio di riciclo con RiArtEco, digitalizzazione inclusiva con LoveMeToo, percorsi nel verde e incontro con i cavalli con Green Light APS, laboratorio pizza e musica dal vivo con JSAX Events. Ingresso gratuito con prenotazione obbligatoria.",
    tags: ["inclusione", "natura", "famiglia"],
    poster: {
      src: "/images/home/eventi/festa_della_primavera.webp",
      alt: "Locandina della Grande Festa di Primavera del 24 maggio 2026 a Castel Gandolfo",
    },
    extraPoster: {
      src: "/images/home/eventi/festa_della_primavera_programma_dettagliato.webp",
      alt: "Programma dettagliato della Grande Festa di Primavera del 24 maggio 2026",
      label: "Programma dettagliato",
    },
    ctas: [
      {
        label: "Prenota su Eventbrite",
        href: "https://www.eventbrite.com/e/biglietti-la-grande-festa-di-primavera-1986904177882",
        external: true,
      },
      {
        label: "Info via WhatsApp",
        href: "https://wa.me/393332967651",
        variant: "outline",
        external: true,
      },
    ],
  },
  {
    slug: "partita-solidale-ciampino",
    title: "Partita Solidale",
    tagline: "Il calcio come ponte verso l'inclusione",
    date: new Date("2026-05-15T18:30:00+02:00"),
    dateLabel: "Mercoledì 15 maggio 2026",
    timeLabel: "Ore 18:30",
    locationLabel: "Centro Sportivo, Via Icaro 1, Ciampino (RM)",
    description:
      "A.S.D. Colberoma Academy e Rete Italiana Disabili insieme per una serata di sport e fratellanza, con il patrocinio della Parrocchia Gesù Divino Operaio. Dopo il fischio finale, tutti a tavola per il tradizionale Terzo Tempo.",
    tags: ["sport", "calcio", "solidarietà"],
    poster: {
      src: "/images/home/eventi/15_maggio_partita_solidale.webp",
      alt: "Locandina Partita Solidale del 15 maggio 2026 a Ciampino",
    },
    ctas: [
      {
        label: "Scrivi su WhatsApp",
        href: "https://wa.me/393926271434",
        variant: "outline",
        external: true,
      },
    ],
  },
]

/**
 * Un evento resta "in arrivo" fino alla fine della sua giornata (ora di Roma).
 * NB: valutato al momento del build, come il resto del sito statico.
 */
export function isUpcoming(event: EventItem) {
  const endOfDay = new Date(event.date)
  endOfDay.setHours(23, 59, 59, 999)
  return endOfDay.getTime() >= Date.now()
}

/** Eventi futuri, mostrati nella sezione "Prossimi eventi" della home. */
export const upcomingEvents = EVENTS.filter(isUpcoming)

/** Eventi conclusi, ordinati dal più recente. */
export const pastEvents = EVENTS.filter((e) => !isUpcoming(e)).sort(
  (a, b) => b.date.getTime() - a.date.getTime()
)

/** Traduce un evento concluso in una scheda progetto. */
export function eventToProject(event: EventItem): Project {
  const gallery = [event.poster.src]
  if (event.extraPoster) gallery.push(event.extraPoster.src)

  return {
    slug: event.slug,
    title: event.title,
    shortDescription: event.tagline,
    fullDescription: `${event.description}\nEvento svolto il ${event.dateLabel} presso ${event.locationLabel}.`,
    coverImage: event.poster.src,
    gallery,
    tags: event.tags ?? [],
    location: event.locationLabel,
    year: event.date.getFullYear(),
    featured: false,
  }
}

/** Eventi conclusi pronti per essere uniti all'elenco progetti. */
export const pastEventsAsProjects = pastEvents.map(eventToProject)
