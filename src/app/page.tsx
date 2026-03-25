import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/sections/hero-section"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { ProjectCard } from "@/components/sections/project-card"
import { PresidentQuote } from "@/components/sections/president-quote"
import { StatsCounter } from "@/components/sections/stats-counter"
import { DonationCta } from "@/components/sections/donation-cta"
import { featuredProjects } from "@/data/projects"
import { siteConfig } from "@/config/site"

export default function HomePage() {
  const [heroProject, ...otherProjects] = featuredProjects

  return (
    <>
      <HeroSection
        title={siteConfig.tagline}
        subtitle={`Ti diamo il benvenuto nel sito di ${siteConfig.name}, dove ci impegniamo con passione e dedizione per promuovere progetti di integrazione sociale a supporto delle persone con disabilità e delle loro famiglie.`}
        ctaLabel="Scopri i nostri progetti"
        ctaHref="/progetti"
        secondaryCtaLabel="Chi siamo"
        secondaryCtaHref="/chi-siamo"
      />

      {/* Featured projects — varied layout, not uniform grid */}
      <SectionWrapper title="I nostri progetti" subtitle="Le iniziative più recenti della Rete">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Hero project — larger */}
          {heroProject && (
            <div className="lg:row-span-2">
              <ProjectCard project={heroProject} />
            </div>
          )}
          {/* Secondary projects — stacked */}
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/progetti">
              Vedi tutti i progetti <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Quote — left aligned, not centered */}
      <SectionWrapper className="bg-card">
        <PresidentQuote />
      </SectionWrapper>

      {/* Stats — keep centered, it works for numbers */}
      <SectionWrapper title="Il nostro impatto" subtitle="Contro ogni forma di discriminazione">
        <StatsCounter />
      </SectionWrapper>

      <SectionWrapper>
        <DonationCta />
      </SectionWrapper>
    </>
  )
}
