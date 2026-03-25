import type { Metadata } from "next"
import Link from "next/link"
import { Users } from "lucide-react"
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
            Insieme possiamo fare la differenza e promuovere l'inclusione in
            tutta Italia. Scopri di più sul nostro sito e partecipa al
            cambiamento.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PdfDownloadButton
              href="/documents/modulo-iscrizione.pdf"
              label="Scarica il modulo di iscrizione"
            />
            <Button asChild variant="outline" size="lg">
              <Link href="/contatti">Contattaci per info</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
