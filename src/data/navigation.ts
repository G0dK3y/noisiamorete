export interface NavItem {
  label: string
  href: string
  highlight?: boolean
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "La nostra missione", href: "/missione" },
  { label: "I Progetti", href: "/progetti" },
  { label: "Dicono di noi", href: "/dicono-di-noi" },
  { label: "Contatti", href: "/contatti" },
  { label: "Sponsor", href: "/sponsor" },
]

export const ctaNav: NavItem[] = [
  { label: "Diventa socio", href: "/diventa-socio" },
  { label: "Dona", href: "/dona", highlight: true },
]
