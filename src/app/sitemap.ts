import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { projects } from "@/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/chi-siamo",
    "/missione",
    "/progetti",
    "/contatti",
    "/diventa-socio",
    "/dona",
    "/sponsor",
    "/dicono-di-noi",
  ]

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/progetti/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.8,
    })),
    ...projectRoutes,
  ]
}
