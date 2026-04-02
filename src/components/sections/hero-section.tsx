import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroSectionProps) {
  return (
    <section aria-label="Benvenuto" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Subtle decorative element */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              {subtitle}
            </p>
          )}
          {(ctaLabel || secondaryCtaLabel) && (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {ctaLabel && ctaHref && (
                <Button asChild size="lg">
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
