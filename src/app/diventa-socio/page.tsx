import type { Metadata } from "next"
import Link from "next/link"
import { Users, User, Building2, HandHeart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { PdfDownloadButton } from "@/components/common/pdf-download-button"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Diventa socio",
  description:
    "Unisciti a noi per promuovere l'inclusione delle persone con disabilità in tutta Italia.",
  path: "/diventa-socio",
})

export default function DiventaSocioPage() {
  return (
    <>
      <PageHeader
        title="Diventa socio!"
        description="Unisciti a noi nell'opera di sensibilizzazione e supporto alle persone con disabilità"
        breadcrumbs={[{ label: "Diventa socio" }]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <Users
            className="mx-auto h-16 w-16 text-primary"
            aria-hidden="true"
          />
          <p className="mt-6 text-lg text-muted-foreground">
            Insieme possiamo fare la differenza e promuovere l&apos;inclusione
            in tutta Italia. Scarica il modulo di richiesta ammissione,
            compilalo e invialo per entrare a far parte della nostra rete.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Scarica il modulo di ammissione">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center">
            <User
              className="h-10 w-10 shrink-0 text-primary"
              aria-hidden="true"
            />
            <h3 className="text-lg font-semibold">Persone fisiche</h3>
            <p className="text-sm text-muted-foreground">
              Modulo per qualsiasi persona che desidera associarsi
            </p>
            <div className="mt-auto pt-2">
              <PdfDownloadButton
                href="/documents/modulo-iscrizione-persona.pdf"
                label="Scarica modulo"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center">
            <Building2
              className="h-10 w-10 shrink-0 text-primary"
              aria-hidden="true"
            />
            <h3 className="text-lg font-semibold">ETS e persone giuridiche</h3>
            <p className="text-sm text-muted-foreground">
              Riservato ad Enti del Terzo Settore (ETS) e persone giuridiche
            </p>
            <div className="mt-auto pt-2">
              <PdfDownloadButton
                href="/documents/modulo-iscrizione-ets.pdf"
                label="Scarica modulo"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center">
            <HandHeart
              className="h-10 w-10 shrink-0 text-primary"
              aria-hidden="true"
            />
            <h3 className="text-lg font-semibold">Volontari</h3>
            <p className="text-sm text-muted-foreground">
              Modulo per chi desidera prestare attività di volontariato
            </p>
            <div className="mt-auto pt-2">
              <PdfDownloadButton
                href="/documents/modulo-volontario.pdf"
                label="Scarica modulo"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/contatti">Contattaci per info</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
