import type { Metadata } from "next"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { ServiceCard } from "@/components/sections/service-card"
import { StatsCounter } from "@/components/sections/stats-counter"
import { generatePageMetadata } from "@/lib/metadata"
import { services } from "@/data/services"

export const metadata: Metadata = generatePageMetadata({
  title: "La nostra missione",
  description:
    "Trasformiamo idee in progetti e realtà. Scopri i servizi che offriamo ai nostri associati.",
  path: "/missione",
})

export default function MissionePage() {
  return (
    <>
      <PageHeader
        title="Siamo sempre di più"
        description="I nostri professionisti nella Rete — Trasformiamo idee in progetti e realtà"
        breadcrumbs={[{ label: "La nostra missione" }]}
      />

      <SectionWrapper
        title="I nostri servizi"
        subtitle="Offriamo a tutti i nostri associati"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Contro ogni forma di discriminazione"
        className="bg-card"
      >
        <StatsCounter />
      </SectionWrapper>
    </>
  )
}
