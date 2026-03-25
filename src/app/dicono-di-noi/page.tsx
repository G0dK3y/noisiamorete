import type { Metadata } from "next"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { TestimonialCard } from "@/components/sections/testimonial-card"
import { generatePageMetadata } from "@/lib/metadata"
import { testimonials } from "@/data/testimonials"

export const metadata: Metadata = generatePageMetadata({
  title: "Dicono di noi",
  description:
    "Scopri cosa dicono le persone che hanno partecipato alle nostre iniziative.",
  path: "/dicono-di-noi",
})

export default function DiconoDiNoiPage() {
  return (
    <>
      <PageHeader
        title="Dicono di noi"
        description="Le testimonianze di chi ha partecipato alle nostre iniziative"
        breadcrumbs={[{ label: "Dicono di noi" }]}
      />

      <SectionWrapper>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
