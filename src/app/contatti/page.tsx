import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { PageHeader } from "@/components/common/page-header"
import { SectionWrapper } from "@/components/common/section-wrapper"
import { ContactForm } from "@/components/sections/contact-form"
import { SocialLinks } from "@/components/common/social-links"
import { generatePageMetadata } from "@/lib/metadata"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = generatePageMetadata({
  title: "Contatti",
  description:
    "Contattaci per informazioni o per essere aggiornati sulle nostre attività.",
  path: "/contatti",
})

export default function ContattiPage() {
  return (
    <>
      <PageHeader
        title="Contatti"
        description="Per chiedere informazioni o essere aggiornati sulle nostre attività potete contattarci"
        breadcrumbs={[{ label: "Contatti" }]}
      />

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Scrivici</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Restiamo in contatto</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Social</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
