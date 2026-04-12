import Image from "next/image"
import Link from "next/link"
import { Calendar, Gift, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const LOCANDINE = [
  {
    src: "/images/home/gianduia/card-1.webp",
    alt: "Locandina campagna: dona 15€ dal 15 aprile al 15 maggio",
  },
  {
    src: "/images/home/gianduia/card-2.webp",
    alt: "Locandina campagna: la tua donazione è un pilastro di supporto concreto",
  },
  {
    src: "/images/home/gianduia/card-3.webp",
    alt: "Locandina campagna: IBAN e istruzioni per la donazione",
  },
]

export function GianduiaCampaign() {
  return (
    <div className="space-y-10">
      <Badge variant="secondary" className="gap-1.5">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
        Campagna attiva
      </Badge>

      <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="relative aspect-[1200/630] w-full bg-muted">
          <Image
            src="/images/home/gianduia/banner.webp"
            alt="Una dolcezza che sostiene il coraggio — crema alla Gianduia della Casa del Dolce di Ciampino"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 960px"
            priority={false}
          />
        </div>

        <div className="grid gap-0 lg:grid-cols-1">
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Una dolcezza che sostiene il coraggio
              </h3>
              <p className="mt-4 text-muted-foreground">
                Dona{" "}
                <strong className="text-foreground">15&nbsp;€</strong> a Rete
                Italiana Disabili e ricevi in omaggio un vasetto di crema
                artigianale alla Gianduia della{" "}
                <strong className="text-foreground">
                  Casa del Dolce di Ciampino
                </strong>
                .
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                La tua donazione diventa sostegno concreto: assistenza, sollievo
                e progetti di Cura Ricreativa per restituire ai ragazzi il
                diritto al gioco e ai genitori la forza di continuare.
              </p>
            </div>

            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">Quando</dt>
                  <dd className="text-muted-foreground">
                    Dal 15 aprile al 15 maggio
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Gift className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">In omaggio</dt>
                  <dd className="text-muted-foreground">
                    Crema alla Gianduia artigianale*
                  </dd>
                </div>
              </div>
            </dl>

            <div className="rounded-lg border border-dashed border-border p-4 text-sm">
              <p className="font-semibold">Come donare</p>
              <p className="mt-1 text-muted-foreground">
                Bonifico di 15&nbsp;€ (o donazione libera) su IBAN:
              </p>
              <p className="mt-1 break-all font-mono text-xs">{siteConfig.iban}</p>
              <p className="mt-2 text-muted-foreground">
                Invia la ricevuta e il tuo indirizzo a{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/dona">
                  <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
                  Dona ora
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">*Salvo esaurimento scorte</p>
            </div>
          </div>
        </div>
      </article>

      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Condividi la campagna
        </p>
        <ul className="grid gap-4 sm:grid-cols-3">
          {LOCANDINE.map((item) => (
            <li
              key={item.src}
              className="overflow-hidden rounded-lg border border-border bg-muted"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
