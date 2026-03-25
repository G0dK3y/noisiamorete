"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { siteConfig } from "@/config/site"

export function IbanDisplay({ compact }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false)

  async function copyIban() {
    await navigator.clipboard.writeText(siteConfig.iban)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={compact ? "" : "rounded-lg border border-border bg-card p-4"}>
      <p className="text-sm text-muted-foreground">
        {compact ? "IBAN" : siteConfig.ibanLabel}
      </p>
      <div className="flex items-center gap-2">
        <code className="font-mono text-sm font-semibold tracking-wide">
          {siteConfig.iban}
        </code>
        <button
          onClick={copyIban}
          className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Copia IBAN"
        >
          {copied ? (
            <Check className="h-4 w-4 text-success" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <div aria-live="polite" className="sr-only">
        {copied ? "IBAN copiato negli appunti" : ""}
      </div>
    </div>
  )
}
