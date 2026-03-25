import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { PdfDownloadButton } from "@/components/common/pdf-download-button"
import { ShareButtons } from "@/components/common/share-buttons"
import { generatePageMetadata } from "@/lib/metadata"
import { projects, getProjectBySlug } from "@/data/projects"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return generatePageMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/progetti/${project.slug}`,
    image: project.coverImage,
  })
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <PageHeader
        title={project.title}
        breadcrumbs={[
          { label: "I Progetti", href: "/progetti" },
          { label: project.title },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            {project.location && (
              <Badge variant="outline">{project.location}</Badge>
            )}
            <Badge variant="outline">{project.year}</Badge>
          </div>

          <div className="prose prose-zinc max-w-none dark:prose-invert">
            {project.fullDescription.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {project.partners && project.partners.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold">Partner</h3>
              <div className="flex flex-wrap gap-2">
                {project.partners.map((partner) => (
                  <Badge key={partner} variant="secondary">
                    {partner}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <ShareButtons path={`/progetti/${project.slug}`} title={project.title} />

          {project.pdfBrochure && (
            <PdfDownloadButton
              href={project.pdfBrochure}
              label="Scarica la brochure"
            />
          )}

          <Button asChild variant="ghost">
            <Link href="/progetti">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna ai progetti
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
