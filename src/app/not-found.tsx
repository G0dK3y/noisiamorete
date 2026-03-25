import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-mono text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold">Pagina non trovata</h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Torna alla home
        </Link>
      </Button>
    </div>
  )
}
