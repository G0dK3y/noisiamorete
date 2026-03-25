import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image ?? siteConfig.ogImage

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "it_IT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}
