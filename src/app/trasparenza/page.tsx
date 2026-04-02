import type { Metadata } from "next"
import { FileText } from "lucide-react"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { PdfDownloadButton } from "@/components/common/pdf-download-button"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Trasparenza",
  description:
    "Bilanci e documenti ufficiali di Rete Italiana Disabili APS, consultabili in trasparenza.",
  path: "/trasparenza",
})

const bilanci = [
  { anno: "2024", href: "/documents/bilancio-2024.pdf" },
  { anno: "2023", href: "/documents/bilancio-2023.pdf" },
  { anno: "2022", href: "/documents/bilancio-2022.pdf" },
]

export default function TrasparenzaPage() {
  return (
    <>
      <PageHeader
        title="Trasparenza"
        description="Documenti e bilanci dell'Associazione"
        breadcrumbs={[{ label: "Trasparenza" }]}
      />

      <SectionWrapper title="Bilanci">
        <div className="mx-auto max-w-2xl space-y-4">
          <div className="flex items-center gap-3">
            <FileText
              className="h-8 w-8 text-primary"
              aria-hidden="true"
            />
            <p className="text-muted-foreground">
              In conformità al D.Lgs. 117/2017, pubblichiamo i bilanci annuali
              dell&apos;Associazione a disposizione di soci e cittadini.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {bilanci.map((b) => (
              <div
                key={b.anno}
                className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center"
              >
                <span className="text-2xl font-bold">{b.anno}</span>
                <PdfDownloadButton
                  href={b.href}
                  label={`Bilancio ${b.anno}`}
                />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
