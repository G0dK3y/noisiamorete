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
  /** Clip promozionale (verticale) mostrata nella card dell'evento. */
  video?: { src: string; label: string }
  extraPoster?: { src: string; alt: string; label: string }
  /** Galleria completa (es. card promozionali): diventa la gallery del progetto una volta archiviato. */
  gallery?: string[]
  ctas: EventCta[]
}

const ATC_PADEL_CARDS = [1, 2, 3, 4, 5].map(
  (n) => `/images/home/eventi/a-tutto-campo-padel/card-${n}.webp`
)

const EVENTS: EventItem[] = [
  {
    slug: "a-tutto-campo-speciale-serale",
    title: "A Tutto Campo – Speciale Serale",
    tagline: "Padel inclusivo e giro pizza a bordo campo",
    date: new Date("2026-07-28T18:00:00+02:00"),
    dateLabel: "Martedì 28 luglio 2026",
    timeLabel: "Ore 18:00–19:30",
    locationLabel: "Tennis Club Vigna Fiorita, Via Quarto Sant'Antonio SNC, Ciampino (RM)",
    description:
      "Una speciale serata A Tutto Campo insieme al Tennis Club Vigna Fiorita: padel inclusivo e giro pizza a bordo campo, con pizza, fritti, bibita e dolce. Quota intera 20 € tutto compreso, bambini dai 3 ai 6 anni 10 €, gratis i piccolissimi sotto i 3 anni. Partecipando darai anche un piccolo e prezioso contributo a sostegno delle attività inclusive dell'Associazione.",
    tags: ["sport", "padel", "inclusione"],
    poster: {
      src: "/images/home/eventi/a-tutto-campo-speciale-serale.webp",
      alt: "Locandina Speciale Serale A Tutto Campo: padel inclusivo e giro pizza a bordo campo al Tennis Club Vigna Fiorita di Ciampino, martedì 28 luglio 2026 dalle 18:00",
    },
    video: {
      src: "/videos/a-tutto-campo-speciale-serale.mp4",
      label: "Guarda il video della serata",
    },
    ctas: [
      {
        label: "Prenota via WhatsApp",
        href: "https://wa.me/393332967651",
        external: true,
      },
      {
        label: "Oppure 392 627 1434",
        href: "https://wa.me/393926271434",
        variant: "outline",
        external: true,
      },
    ],
  },
  {
    slug: "a-tutto-campo-padel-inclusivo",
    title: "A Tutto Campo – Padel Inclusivo",
    tagline: "Un corso di padel inclusivo per tutti",
    date: new Date("2026-09-01T10:00:00+02:00"),
    dateLabel: "Da settembre 2026",
    timeLabel: "Due sessioni a settimana, 1 ora ciascuna",
    locationLabel: "Tennis Club Vigna Fiorita, Via Quarto Sant'Antonio SNC, Ciampino (RM)",
    description:
      "Dalla collaborazione tra Rete Italiana Disabili e il Tennis Club Vigna Fiorita nasce un vero e proprio corso di padel inclusivo. Da settembre, due sessioni a settimana di un'ora ciascuna, con educatori e maestri federali di padel pronti a far vivere ai partecipanti questa fantastica esperienza: non solo tante agevolazioni, ma un percorso continuativo e accessibile a tutti. Vuoi partecipare all'iniziativa o diventare nostro sponsor? Contattaci.",
    tags: ["sport", "padel", "inclusione"],
    poster: {
      src: "/images/home/eventi/a-tutto-campo-padel/card-1.webp",
      alt: "A Tutto Campo – Padel Inclusivo: corso di padel inclusivo dalla collaborazione tra Rete Italiana Disabili e Tennis Club Vigna Fiorita",
    },
    gallery: ATC_PADEL_CARDS,
    ctas: [
      {
        label: "Scrivi su WhatsApp",
        href: "https://wa.me/393332967651",
        external: true,
      },
      {
        label: "Diventa sponsor",
        href: "/sponsor",
        variant: "outline",
      },
    ],
  },
  {
    slug: "a-tutto-campo-vigna-fiorita-luglio",
    title: "A Tutto Campo",
    tagline: "Padel e Tennis senza barriere",
    date: new Date("2026-07-08T10:00:00+02:00"),
    dateLabel: "Tre giornate gratuite — giugno e luglio 2026",
    timeLabel: "Vedi calendario",
    sessions: [
      { dateLabel: "Mercoledì 24 giugno", timeLabel: "Ore 10:00", note: "Avviamento e gioco guidato" },
      { dateLabel: "Mercoledì 1 luglio", timeLabel: "Ore 10:00", note: "Allenamento e padel inclusivo" },
      { dateLabel: "Mercoledì 8 luglio", timeLabel: "Ore 10:00", note: "Giornata conclusiva e tornei inclusivi" },
    ],
    locationLabel: "Tennis Club Vigna Fiorita, Via Quarto Sant'Antonio SNC, Ciampino (RM)",
    description:
      "Tre giornate gratuite di Padel e Tennis con il Tennis Club Vigna Fiorita e il patrocinio del CIP Lazio. I volontari di Rete Italiana Disabili garantiscono accompagnamento e assistenza mirata a partecipanti con disabilità anche complesse. Per prenotare: Cristian Morato, referente sport.",
    tags: ["sport", "tennis", "inclusione"],
    poster: {
      src: "/images/home/eventi/a_tutto_campo_estate.webp",
      alt: "Locandina A Tutto Campo: tre giornate gratuite di padel e tennis al Tennis Club Vigna Fiorita di Ciampino, giugno–luglio 2026",
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
  {
    slug: "alfabetizzazione-digitale-microsoft",
    title: "Progetto di Alfabetizzazione Digitale",
    tagline: "La tecnologia al servizio delle famiglie",
    date: new Date("2026-07-03T17:00:00+02:00"),
    dateLabel: "Giovedì 3 luglio 2026",
    timeLabel: "Ore 17:00",
    locationLabel: "Sede Microsoft, Viale Avignone 10, Roma EUR (parcheggio interno accessibile)",
    description:
      "Nasce il supporto digitale gratuito di Rete Italiana Disabili: un vero e proprio corso base di PC e alfabetizzazione digitale, pensato per chi vuole muovere i primi passi o ha bisogno di imparare a gestire le piccole commissioni di ogni giorno. Seguiranno altri incontri da remoto.",
    tags: ["formazione", "digitale", "inclusione"],
    poster: {
      src: "/images/home/eventi/alfabetizzazione-digitale.webp",
      alt: "Locandina del Progetto di Alfabetizzazione Digitale presso la Sede Microsoft di Roma, 3 luglio 2026",
    },
    ctas: [
      {
        label: "Scrivi su WhatsApp",
        href: "https://wa.me/393926271434",
        external: true,
      },
    ],
  },
  {
    slug: "in-campo-inclusione-catania",
    title: "In Campo per l'Inclusione",
    tagline: "Sport e inclusione al City Sports Club",
    date: new Date("2026-06-18T18:00:00+02:00"),
    dateLabel: "Giovedì 18 giugno 2026",
    timeLabel: "Ore 18:00",
    locationLabel: "City Sports Club, Via Santa Sofia, 95123 Catania (CT)",
    description:
      "Una giornata di sport e inclusione al City Sports Club di Catania, promossa da Rete Italiana Disabili Sicilia insieme al City Sports Club e all'associazione \"La voce e le parole\". Lo sport come strumento di incontro, crescita e abbattimento delle barriere.",
    tags: ["sport", "inclusione", "Sicilia"],
    poster: {
      src: "/images/home/eventi/in-campo-inclusione.webp",
      alt: "Locandina In Campo per l'Inclusione al City Sports Club di Catania, 18 giugno 2026",
    },
    ctas: [],
  },
  {
    slug: "pluralita-diversita-roma",
    title: "Pluralità Diversità – be inclusive",
    tagline: "Collettiva d'arte per l'inclusione",
    date: new Date("2026-06-04T18:30:00+02:00"),
    dateLabel: "Giovedì 4 giugno 2026",
    timeLabel: "Ore 18:30",
    locationLabel: "Galleria d'Arte – Centro Interculturale Art Studio, Via della Lungara 43, Roma",
    description:
      "Una collettiva d'arte dedicata alla pluralità e alla diversità, promossa da B-HOP Magazine. Rete Italiana Disabili ha partecipato con il Progetto Zoo Safari Tour, raccontato dalla storica dell'arte Silvia Filippi, insieme alle opere di numerosi artisti. La serata si è conclusa con un aperitivo solidale.",
    tags: ["arte", "cultura", "inclusione"],
    poster: {
      src: "/images/home/eventi/pluralita-diversita.webp",
      alt: "Locandina della collettiva d'arte Pluralità Diversità – be inclusive, Roma, 4 giugno 2026",
    },
    ctas: [],
  },
  {
    slug: "come-ti-senti-acireale",
    title: "Come ti senti nel tuo corpo?",
    tagline: "Percorso di consapevolezza per ragazzi e genitori",
    date: new Date("2026-06-15T17:00:00+02:00"),
    dateLabel: "Da maggio a giugno 2026",
    timeLabel: "Vedi calendario",
    sessions: [
      { dateLabel: "Domenica 25 maggio", timeLabel: "Ore 17:00 / 18:15", note: "Incontro introduttivo, anche per i genitori" },
      { dateLabel: "Giovedì 5 giugno", timeLabel: "Ore 17:00 / 18:15" },
      { dateLabel: "Giovedì 12 giugno", timeLabel: "Ore 17:00 / 18:15" },
      { dateLabel: "Domenica 15 giugno", timeLabel: "Ore 17:00 / 18:15", note: "Ore 17:00 (14–25 anni) · Ore 18:15 (8–13 anni)" },
    ],
    locationLabel: "Osteorganiclinic, Via Cervo 46F, Acireale (CT)",
    description:
      "Un percorso per capire e prendersi cura di sé, che aiuta bambini e genitori a conoscere il corpo, le sensazioni, le emozioni e le relazioni attraverso quattro incontri pratici e un incontro introduttivo dedicato anche ai genitori. Promosso da Rete Italiana Disabili Sicilia.",
    tags: ["benessere", "salute mentale", "Sicilia"],
    poster: {
      src: "/images/home/eventi/come-ti-senti.webp",
      alt: "Locandina del percorso Come ti senti nel tuo corpo? a Acireale, maggio–giugno 2026",
    },
    ctas: [],
  },
  {
    slug: "nessuno-troppo-povero-caritas-giugno",
    title: "Nessuno è troppo povero per donare un sorriso",
    tagline: "Mattinata solidale alla Mensa Caritas",
    date: new Date("2026-06-07T10:00:00+02:00"),
    dateLabel: "Domenica 7 giugno 2026",
    timeLabel: "Ore 10:00",
    locationLabel: "Mensa Caritas Colle Oppio, Roma",
    description:
      "Una nuova tappa del progetto \"Nessuno è troppo povero per donare un sorriso\", che prosegue ininterrottamente da gennaio 2026. I volontari di Rete Italiana Disabili hanno portato un momento di calore e condivisione agli ospiti della Mensa Caritas di Colle Oppio.",
    tags: ["solidarietà", "volontariato", "caritas"],
    poster: {
      src: "/images/home/eventi/nessuno-troppo-povero-caritas.webp",
      alt: "Locandina Nessuno è troppo povero per donare un sorriso, Mensa Caritas Colle Oppio, 7 giugno 2026",
    },
    ctas: [],
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

/** Eventi futuri, mostrati nella sezione "Prossimi eventi" della home (dal più vicino). */
export const upcomingEvents = EVENTS.filter(isUpcoming).sort(
  (a, b) => a.date.getTime() - b.date.getTime()
)

/** Eventi conclusi, ordinati dal più recente. */
export const pastEvents = EVENTS.filter((e) => !isUpcoming(e)).sort(
  (a, b) => b.date.getTime() - a.date.getTime()
)

/** Traduce un evento concluso in una scheda progetto. */
export function eventToProject(event: EventItem): Project {
  const gallery = event.gallery
    ? [...event.gallery]
    : [event.poster.src, ...(event.extraPoster ? [event.extraPoster.src] : [])]

  return {
    slug: event.slug,
    title: event.title,
    shortDescription: event.tagline,
    fullDescription: `${event.description}\nEvento svolto il ${event.dateLabel} presso ${event.locationLabel}.`,
    coverImage: event.poster.src,
    gallery,
    videos: event.video ? [event.video.src] : undefined,
    tags: event.tags ?? [],
    location: event.locationLabel,
    year: event.date.getFullYear(),
    featured: false,
  }
}

/** Eventi conclusi pronti per essere uniti all'elenco progetti. */
export const pastEventsAsProjects = pastEvents.map(eventToProject)
