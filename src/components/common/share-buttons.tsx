"use client"

import { useState } from "react"
import { Share2, Check, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function ShareButtons({ path, title }: { path: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const url = `${siteConfig.url}${path}`
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 flex items-center gap-1 text-sm text-muted-foreground">
        <Share2 className="h-4 w-4" aria-hidden="true" />
        Condividi
      </span>
      <Button asChild variant="outline" size="sm">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Condividi su Facebook (si apre in una nuova finestra)"
        >
          Facebook
        </a>
      </Button>
      <Button asChild variant="outline" size="sm">
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Condividi su WhatsApp (si apre in una nuova finestra)"
        >
          WhatsApp
        </a>
      </Button>
      <Button variant="outline" size="sm" onClick={copyLink}>
        {copied ? (
          <>
            <Check className="mr-1 h-3 w-3" /> Copiato
          </>
        ) : (
          <>
            <LinkIcon className="mr-1 h-3 w-3" /> Link
          </>
        )}
      </Button>
      <div aria-live="polite" className="sr-only">
        {copied ? "Link copiato negli appunti" : ""}
      </div>
    </div>
  )
}
