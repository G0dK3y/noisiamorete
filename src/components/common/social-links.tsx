import { Facebook, Instagram, Youtube } from "lucide-react"
import { siteConfig } from "@/config/site"

const links = [
  { href: siteConfig.social.facebook, icon: Facebook, label: "Facebook" },
  { href: siteConfig.social.instagram, icon: Instagram, label: "Instagram" },
  {
    href: siteConfig.social.instagramSicilia,
    icon: Instagram,
    label: "Instagram Sicilia",
    badge: "Sicilia",
  },
  { href: siteConfig.social.youtube, icon: Youtube, label: "YouTube" },
]

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className ?? ""}`}>
      {links.map(({ href, icon: Icon, label, badge }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visita la nostra pagina ${label} (si apre in una nuova finestra)`}
          className={`flex h-11 items-center justify-center gap-1.5 rounded-md text-muted-foreground transition-colors hover:text-foreground ${
            badge ? "px-3" : "w-11"
          }`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
          {badge && <span className="text-xs font-medium">{badge}</span>}
        </a>
      ))}
    </div>
  )
}
