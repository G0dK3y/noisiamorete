import Image from "next/image"
import { sponsors } from "@/data/sponsors"

export function SponsorGrid() {
  return (
    <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {sponsors.map((sponsor) => (
        <li
          key={sponsor.id}
          className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md"
        >
          {sponsor.website ? (
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visita il sito di ${sponsor.name} (si apre in una nuova finestra)`}
              className="flex flex-col items-center gap-3"
            >
              <Image
                src={sponsor.logo}
                alt={`Logo di ${sponsor.name}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0 focus-visible:grayscale-0"
              />
              <span className="text-xs text-muted-foreground">{sponsor.name}</span>
            </a>
          ) : (
            <>
              <Image
                src={sponsor.logo}
                alt={`Logo di ${sponsor.name}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
              <span className="text-xs text-muted-foreground">{sponsor.name}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
