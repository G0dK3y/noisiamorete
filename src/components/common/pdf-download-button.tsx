import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PdfDownloadButtonProps {
  href: string
  label: string
}

export function PdfDownloadButton({ href, label }: PdfDownloadButtonProps) {
  return (
    <Button asChild variant="outline" size="lg">
      <a href={href} download aria-label={`Scarica ${label} in formato PDF`}>
        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
        {label}
      </a>
    </Button>
  )
}
