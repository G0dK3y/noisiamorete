import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div role="status" className="flex flex-1 items-center justify-center py-24">
      <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden="true" />
      <span className="sr-only">Caricamento in corso</span>
    </div>
  )
}
