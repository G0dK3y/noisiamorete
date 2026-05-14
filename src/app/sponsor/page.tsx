import type { Metadata } from "next"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { SponsorGrid } from "@/components/sections/sponsor-grid"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "I nostri sponsor",
  description:
    "I nostri progetti di inclusione sono realizzati grazie al continuo supporto dei nostri sponsor.",
  path: "/sponsor",
})

export default function SponsorPage() {
  return (
    <>
      <PageHeader
        title="I nostri sponsor"
        description="I nostri progetti di inclusione sono realizzati grazie al continuo supporto dei nostri sponsor"
        breadcrumbs={[{ label: "Sponsor" }]}
      />

      <SectionWrapper>
        <div className="mb-10 rounded-xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Vuoi diventare nostro sponsor?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Scarica la brochure di presentazione dell&apos;associazione per
                conoscere meglio i nostri progetti e le opportunità di
                collaborazione.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a
                href="/documents/presentazione-rete-italiana-disabili.pdf"
                target="_blank"
                rel="noopener"
              >
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Scarica presentazione (PDF)
              </a>
            </Button>
          </div>
        </div>

        <SponsorGrid />
      </SectionWrapper>
    </>
  )
}
