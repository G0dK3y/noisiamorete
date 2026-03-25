import type { Metadata } from "next"
import Link from "next/link"
import { Heart, Users, HandHeart, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { IbanDisplay } from "@/components/common/iban-display"
import { TestimonialCard } from "@/components/sections/testimonial-card"
import { generatePageMetadata } from "@/lib/metadata"
import { testimonials } from "@/data/testimonials"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = generatePageMetadata({
  title: "Dona",
  description:
    "Sostieni i nostri progetti o diventa partner della Rete Italiana Disabili.",
  path: "/dona",
})

const waysToHelp = [
  {
    icon: Heart,
    title: "Dona adesso",
    description:
      "Ogni contributo ci aiuta a realizzare i nostri progetti di inclusione sociale.",
    href: "#dona-ora",
  },
  {
    icon: Users,
    title: "Diventa socio",
    description:
      "Entra a far parte della nostra rete e partecipa attivamente alle iniziative.",
    href: "/diventa-socio",
  },
  {
    icon: HandHeart,
    title: "Diventa volontario",
    description:
      "Dona il tuo tempo e le tue competenze per aiutare chi ha più bisogno.",
    href: "/contatti",
  },
]

export default function DonaPage() {
  return (
    <>
      <PageHeader
        title="Dona"
        description="Scopri i diversi modi in cui puoi aiutarci a sostenere l'Associazione"
        breadcrumbs={[{ label: "Dona" }]}
      />

      <SectionWrapper>
        <div className="grid gap-6 sm:grid-cols-3">
          {waysToHelp.map((way) => (
            <Card key={way.title} className="text-center transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <way.icon className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{way.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{way.description}</p>
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <Link href={way.href}>Scopri di più</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="dona-ora" title="Come donare" className="bg-card">
        <div className="mx-auto max-w-lg space-y-6 text-center">
          <IbanDisplay />
          <p className="text-sm text-muted-foreground">
            <strong>Codice Fiscale:</strong> {siteConfig.cf}
          </p>
          <Button asChild size="lg">
            <a
              href={siteConfig.gofundme}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dona su GoFundMe (si apre in una nuova finestra)"
            >
              Dona su GoFundMe <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">Grazie per il tuo aiuto!</p>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Dicono di noi" subtitle="Testimonianze">
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
