import Link from "next/link"
import { Heart } from "lucide-react"
import { siteConfig } from "@/config/site"
import { SocialLinks } from "@/components/common/social-links"
import { IbanDisplay } from "@/components/common/iban-display"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  "Chi siamo": [
    { label: "La nostra storia", href: "/chi-siamo" },
    { label: "La nostra missione", href: "/missione" },
    { label: "Dicono di noi", href: "/dicono-di-noi" },
  ],
  Progetti: [
    { label: "Tutti i progetti", href: "/progetti" },
    { label: "Zoo Safari Tour", href: "/progetti/zoo-safari-tour" },
    { label: "Sponsor", href: "/sponsor" },
  ],
  Supportaci: [
    { label: "Dona ora", href: "/dona" },
    { label: "Diventa socio", href: "/diventa-socio" },
    { label: "Contattaci", href: "/contatti" },
  ],
}

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Torna alla homepage">
              <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
            <SocialLinks />
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <nav key={group} aria-label={`Navigazione ${group}`}>
              <h3 className="mb-3 text-sm font-semibold">{group}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-8" />

        {/* IBAN */}
        <div className="mb-8">
          <IbanDisplay />
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} APS — C.F.{" "}
            {siteConfig.cf}
          </p>
          <p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
