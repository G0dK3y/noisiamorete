import Link from "next/link"
import { Heart, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function DonationCta() {
  return (
    <div className="rounded-xl border border-border bg-card p-8 sm:p-12">
      <div className="mx-auto max-w-lg space-y-6">
        <div>
          <Heart className="h-10 w-10 text-accent" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Fai una donazione</h2>
          <p className="mt-3 text-muted-foreground">
            Sostieni i nostri progetti o diventa partner della Rete. Ogni gesto,
            grande o piccolo che sia, fa la differenza.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link href="/dona">Dona ora</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href={siteConfig.gofundme}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dona su GoFundMe (si apre in una nuova finestra)"
            >
              GoFundMe <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
