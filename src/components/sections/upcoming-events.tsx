import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight, Ticket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type EventCta = {
  label: string
  href: string
  variant?: "default" | "outline"
  external?: boolean
}

type EventSession = {
  dateLabel: string
  timeLabel: string
  note?: string
}

type EventItem = {
  slug: string
  title: string
  tagline: string
  date: Date
  dateLabel: string
  timeLabel: string
  sessions?: EventSession[]
  locationLabel: string
  description: string
  poster: { src: string; alt: string }
  extraPoster?: { src: string; alt: string; label: string }
  ctas: EventCta[]
}

const EVENTS: EventItem[] = [
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
    date: new Date("2026-05-29T20:30:00+02:00"),
    dateLabel: "Da marzo a maggio 2026",
    timeLabel: "Vedi calendario",
    sessions: [
      {
        dateLabel: "Venerdì 22 maggio",
        timeLabel: "Ore 18:00–20:30",
        note: "Spazio Terzo A.P.S. — (RI)conoscersi: uno spazio d'incontro e condivisione",
      },
      {
        dateLabel: "Venerdì 29 maggio",
        timeLabel: "Ore 18:30–20:30",
        note: "Theatrike — laboratorio d'improvvisazione teatrale",
      },
    ],
    locationLabel: "Piazza Scammacca 9, 95131 Catania (CT)",
    description:
      "Sei incontri promossi da Rete Italiana Disabili Sicilia con il Comune di Catania: cura di sé, identità genitoriale, meditazione, condivisione e improvvisazione teatrale. Alle 19:30 \u201Cpillole di vino\u201D con ONAV Catania e brindisi offerto da Piazza Scammacca.",
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
]

function isUpcoming(event: EventItem) {
  // Keep event visible until end of its day (local Europe/Rome time)
  const endOfDay = new Date(event.date)
  endOfDay.setHours(23, 59, 59, 999)
  return endOfDay.getTime() >= Date.now()
}

export function UpcomingEvents() {
  const upcoming = EVENTS.filter(isUpcoming)

  if (upcoming.length === 0) return null

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="secondary" className="gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Prossimi eventi
          </Badge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Vieni a conoscerci di persona
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Le occasioni in cui Rete Italiana Disabili scende in campo per
            costruire comunità, sport e inclusione.
          </p>
        </div>
      </div>

      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {upcoming.map((event) => (
          <li key={event.slug}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/5] w-full bg-muted sm:aspect-[3/4]">
                <Image
                  src={event.poster.src}
                  alt={event.poster.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {event.tagline}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight">
                    {event.title}
                  </h3>
                </div>

                <dl className="grid gap-3 text-sm">
                  {event.sessions ? (
                    <div className="flex items-start gap-2">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <div className="flex-1">
                        <dt className="sr-only">Calendario</dt>
                        <dd>
                          <ul className="space-y-1.5">
                            {event.sessions.map((s) => (
                              <li key={s.dateLabel}>
                                <span className="font-semibold">{s.dateLabel}</span>
                                {" — "}
                                <span>{s.timeLabel}</span>
                                {s.note && (
                                  <span className="block text-xs text-muted-foreground">
                                    {s.note}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start gap-2">
                        <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <div>
                          <dt className="sr-only">Data</dt>
                          <dd>{event.dateLabel}</dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <div>
                          <dt className="sr-only">Orario</dt>
                          <dd>{event.timeLabel}</dd>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <dt className="sr-only">Luogo</dt>
                      <dd>{event.locationLabel}</dd>
                    </div>
                  </div>
                </dl>

                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>

                {event.extraPoster && (
                  <Link
                    href={event.extraPoster.src}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center gap-3 rounded-lg border border-dashed border-border p-3 text-sm transition-colors hover:bg-muted"
                  >
                    <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded bg-muted">
                      <Image
                        src={event.extraPoster.src}
                        alt={event.extraPoster.alt}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{event.extraPoster.label}</p>
                      <p className="text-xs text-muted-foreground">
                        Apri l&apos;immagine in una nuova scheda
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  {event.ctas.map((cta) => {
                    const isPrimary = cta.variant !== "outline"
                    return (
                      <Button
                        key={cta.href}
                        asChild
                        size="lg"
                        variant={cta.variant ?? "default"}
                      >
                        <Link
                          href={cta.href}
                          target={cta.external ? "_blank" : undefined}
                          rel={cta.external ? "noopener" : undefined}
                        >
                          {isPrimary && (
                            <Ticket className="mr-2 h-4 w-4" aria-hidden="true" />
                          )}
                          {cta.label}
                        </Link>
                      </Button>
                    )
                  })}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
