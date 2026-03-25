import type { Metadata } from "next"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { ProjectGrid } from "@/components/sections/project-grid"
import { generatePageMetadata } from "@/lib/metadata"
import { projects } from "@/data/projects"

export const metadata: Metadata = generatePageMetadata({
  title: "I Progetti",
  description:
    "Dal 2020 abbiamo lavorato a 50 progetti di cooperazione in rete e inclusione sociale.",
  path: "/progetti",
})

export default function ProgettiPage() {
  return (
    <>
      <PageHeader
        title="I Progetti"
        description="Dal 2020 abbiamo lavorato a 50 progetti di cooperazione in rete e inclusione sociale"
        breadcrumbs={[{ label: "I Progetti" }]}
      />

      <SectionWrapper>
        <ProjectGrid projects={projects} />
      </SectionWrapper>
    </>
  )
}
