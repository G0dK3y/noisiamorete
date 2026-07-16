import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight, Ticket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SocialCallout } from "@/components/common/social-callout"
import { upcomingEvents, type EventItem } from "@/data/events"

export function UpcomingEvents() {
  const [featured, ...rest] = upcomingEvents

  if (!featured) return null

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

      {/* L'evento più vicino è il main event della home finché non si conclude */}
      <EventCard event={featured} featured />

      {rest.length > 0 && (
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((event) => (
            <li key={event.slug}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function EventCard({ event, featured = false }: { event: EventItem; featured?: boolean }) {
  const galleryCards =
    event.gallery?.filter((src) => src !== event.poster.src) ?? []

  return (
    <article
      className={
        featured
          ? "overflow-hidden rounded-xl border border-border bg-card shadow-sm lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
          : "flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      }
    >
      <div
        className={
          featured
            ? "relative aspect-[4/5] w-full bg-muted lg:aspect-auto lg:h-full lg:min-h-[480px]"
            : "relative aspect-[4/5] w-full bg-muted sm:aspect-[3/4]"
        }
      >
        <Image
          src={event.poster.src}
          alt={event.poster.alt}
          fill
          priority={featured}
          className="object-contain"
          sizes={featured ? "(max-width: 1024px) 100vw, 40vw" : "(max-width: 1024px) 100vw, 50vw"}
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
        <div>
          {featured && (
            <Badge className="mb-3 gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              In evidenza
            </Badge>
          )}
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {event.tagline}
          </p>
          <h3
            className={
              featured
                ? "mt-1 text-2xl font-bold tracking-tight sm:text-3xl"
                : "mt-1 text-2xl font-bold tracking-tight"
            }
          >
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

        {event.video && (
          <div>
            <p className="mb-2 text-sm font-semibold">{event.video.label}</p>
            <video
              controls
              playsInline
              preload="metadata"
              src={event.video.src}
              className="aspect-[9/16] w-full max-w-[240px] rounded-lg border border-border bg-muted object-cover"
            />
          </div>
        )}

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

        {galleryCards.length > 0 && (
          <div>
            <p className="mb-2 text-sm font-semibold">
              Sfoglia le card dell&apos;iniziativa
            </p>
            <ul className="grid grid-cols-4 gap-2">
              {galleryCards.map((src, i) => (
                <li key={src}>
                  <Link
                    href={src}
                    target="_blank"
                    rel="noopener"
                    className="group block overflow-hidden rounded-lg border border-border"
                  >
                    <div className="relative aspect-[4/5] w-full bg-muted">
                      <Image
                        src={src}
                        alt={`${event.title} — card ${i + 2}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="120px"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto space-y-4 pt-2">
          <div className="flex flex-wrap items-center gap-3">
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
          <SocialCallout
            className="border-t border-border pt-4"
            headingClassName="text-xs uppercase tracking-wide text-muted-foreground"
          />
        </div>
      </div>
    </article>
  )
}
