import type { Metadata } from "next"
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
        <SponsorGrid />
      </SectionWrapper>
    </>
  )
}
